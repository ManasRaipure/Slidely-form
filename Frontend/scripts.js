let submissions = [];
let currentIndex = 0;
let stopwatchRunning = false;
let stopwatchStart = 0;
let elapsedTime = 0;

document.getElementById('view-submissions').addEventListener('click', openViewSubmissions);
document.getElementById('create-submission').addEventListener('click', openCreateSubmission);
document.getElementById('back-from-view').addEventListener('click', goBack);
document.getElementById('back-from-create').addEventListener('click', goBack);
document.getElementById('previous').addEventListener('click', showPrevious);
document.getElementById('next').addEventListener('click', showNext);
document.getElementById('submit').addEventListener('click', submitForm);
document.getElementById('toggle-stopwatch').addEventListener('click', toggleStopwatch);

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'v') openViewSubmissions();
    if (event.ctrlKey && event.key === 'c') openCreateSubmission();
    if (event.ctrlKey && event.key === 'p') showPrevious();
    if (event.ctrlKey && event.key === 'n') showNext();
    if (event.ctrlKey && event.key === 's') submitForm();
    if (event.ctrlKey && event.key === 'b') goBack();
});

async function openViewSubmissions() {
    document.getElementById('main-form').classList.add('hidden');
    document.getElementById('view-form').classList.remove('hidden');
    await fetchSubmissions();
    showSubmission();
}

function openCreateSubmission() {
    document.getElementById('main-form').classList.add('hidden');
    document.getElementById('create-form').classList.remove('hidden');
}

function goBack() {
    document.getElementById('view-form').classList.add('hidden');
    document.getElementById('create-form').classList.add('hidden');
    document.getElementById('main-form').classList.remove('hidden');
}

async function fetchSubmissions() {
    const response = await fetch('http://localhost:3000/read');
    submissions = await response.json();
}

function showSubmission() {
    if (submissions.length === 0) {
        document.getElementById('submission-details').innerText = 'No submissions available.';
        return;
    }

    const submission = submissions[currentIndex];
    document.getElementById('submission-details').innerText = `Name: ${submission.name}\nEmail: ${submission.email}\nPhone: ${submission.phone}\nGitHub: ${submission.github}`;
}

function showPrevious() {
    if (currentIndex > 0) {
        currentIndex--;
        showSubmission();
    }
}

function showNext() {
    if (currentIndex < submissions.length - 1) {
        currentIndex++;
        showSubmission();
    }
}

async function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const github = document.getElementById('github').value;

    if (!name || !email || !phone || !github) {
        alert('All fields must be filled out');
        return;
    }

    const submission = { name, email, phone, github };

    const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(submission)
    });

    if (response.ok) {
        alert('Submission created successfully');
        goBack();
    } else {
        alert('Failed to create submission');
    }
}

function toggleStopwatch() {
    if (stopwatchRunning) {
        stopwatchRunning = false;
        elapsedTime += Date.now() - stopwatchStart;
    } else {
        stopwatchRunning = true;
        stopwatchStart = Date.now();
        updateStopwatch();
    }
}

function updateStopwatch() {
    if (!stopwatchRunning) return;

    const elapsed = Date.now() - stopwatchStart + elapsedTime;
    const hours = Math.floor(elapsed / 3600000);
    const minutes = Math.floor((elapsed % 3600000) / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);

    document.getElementById('stopwatch').innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    requestAnimationFrame(updateStopwatch);
}
