export default function () {
    return fetch('/resources/files/jobs.json').then(function(response) {
        return response.json();
    }).then(function(jobs) {
        let jobsNavigationBody = '';
        let jobsInfoBody = '';
    
        jobs.map(function(job, index) {
            let description = '';
            let stack = '';

            job.description.map(item => description += `<li>${item}</li>`);
            job.stack.map(item => stack += `<li>${item}</li>`);

            jobsNavigationBody += `
                <li>
                    <a href="#${job.slug}" class="job-link ${index === 0 ? 'is-active' : ''}">${job.name}</a>
                </li>
            `;

            jobsInfoBody += `
                <div class="job ${index !== 0 ? 'is-hidden' : ''}" id="${job.slug}">
                    <h3 class="job-title">${job.title} at <a href="${job.link}" target="_blank">${job.name}</a></h3>
                    <p class="job-range">${job.range}</p>
                    <ul class="job-description">${description}</ul>
                    <ul class="job-stack">${stack}</ul>
                </div>
            `;
        });

        let jobsNavigationDiv = document.getElementById('js-jobs-navigation');
        jobsNavigationDiv.innerHTML = jobsNavigationBody;

        let jobsInfoDiv = document.getElementById('js-jobs-info');
        jobsInfoDiv.innerHTML = jobsInfoBody;
    });
}