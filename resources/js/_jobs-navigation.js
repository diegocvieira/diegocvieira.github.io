export default function setupJobLinkClick() {
    const jobLinks = document.querySelectorAll('.job-link');
    const jobHighlight = document.getElementById('job-highlight');
    const MOBILE_WIDTH = 769;

    jobLinks.forEach(link => {
        link.addEventListener('click', event => handleJobLinkClick(event));
    });

    function handleJobLinkClick(event) {
        event.preventDefault();
        const clickedLink = event.currentTarget;

        deactivateAllJobLinks();
        clickedLink.classList.add('is-active');

        hideAllJobs();
        const jobId = clickedLink.hash.replace('#', '');
        const jobToShow = document.getElementById(jobId);
        if (jobToShow) jobToShow.classList.remove('is-hidden');

        positionJobHighlight(clickedLink);
    }

    function deactivateAllJobLinks() {
        jobLinks.forEach(link => link.classList.remove('is-active'));
    }

    function hideAllJobs() {
        const jobs = document.querySelectorAll('.job');
        jobs.forEach(job => job.classList.add('is-hidden'));
    }

    function positionJobHighlight(link) {
        const isMobile = window.innerWidth < MOBILE_WIDTH;
        const highlightStyle = jobHighlight.style;

        if (isMobile) {
            highlightStyle.setProperty('width', link.offsetWidth + 'px');
            highlightStyle.setProperty('left', link.offsetLeft + 'px');
        } else {
            highlightStyle.setProperty('top', link.offsetTop + 'px');
        }
    }
}
