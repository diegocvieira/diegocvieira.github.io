export default function () {
    const jobLinks = document.querySelectorAll('.job-link');

    jobLinks.forEach(element => element.addEventListener('click', event => {
        event.preventDefault();

        jobLinks.forEach(link => link.classList.remove('is-active'));
        event.target.classList.add('is-active');

        const jobs = document.querySelectorAll('.job');
        jobs.forEach(job => job.classList.add('is-hidden'));

        const jobId = event.currentTarget.hash.replace('#', '');
        let job = document.getElementById(jobId);
        job.classList.remove('is-hidden');

        const jobHighlight = document.getElementById('job-highlight');

        if (window.innerWidth < 769) {
            jobHighlight.style.setProperty('width', event.currentTarget.offsetWidth + 'px');
            jobHighlight.style.setProperty('left', event.target.offsetLeft + 'px');
        } else {
            jobHighlight.style.setProperty('top', event.target.offsetTop + 'px');
        }    
    }));
}