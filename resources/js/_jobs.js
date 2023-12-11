export default function() {
    return fetch('/resources/files/jobs.json')
        .then(response => response.json())
        .then(jobs => {
            const jobsNavigationBody = generateJobsNavigation(jobs);
            const jobsInfoBody = generateJobsInfo(jobs);

            displayJobsNavigation(jobsNavigationBody);
            displayJobsInfo(jobsInfoBody);
        });
}

function generateJobsNavigation(jobs) {
    return jobs.map((job, index) => `
        <li>
            <a href="#${job.slug}" class="job-link ${index === 0 ? 'is-active' : ''}">${job.name}</a>
        </li>
    `).join('');
}

function generateJobsInfo(jobs) {
    return jobs.map((job, index) => {
        const descriptionItems = job.description_en.map((englishDescription, descriptionIndex) => `<li data-lang_en="${englishDescription}" data-lang_pt="${job.description_pt[descriptionIndex]}"></li>`).join('');
        const stackItems = job.stack.map(item => `<li>${item}</li>`).join('');

        return `
            <div class="job ${index !== 0 ? 'is-hidden' : ''}" id="${job.slug}">
                <h3 class="job-title">${job.title} <span data-lang_pt="na" data-lang_en="at"></span> <a href="${job.link}" target="_blank">${job.name}</a></h3>
                <p class="job-range" data-lang_pt="${getTranslatedRange(job.range, 'pt')}" data-lang_en="${getTranslatedRange(job.range, 'en')}"></p>
                <ul class="job-description">${descriptionItems}</ul>
                <ul class="job-stack">${stackItems}</ul>
            </div>
        `;
    }).join('');
}

function displayJobsNavigation(jobsNavigationBody) {
    const jobsNavigationDiv = document.getElementById('js-jobs-navigation');
    if (jobsNavigationDiv) {
        jobsNavigationDiv.innerHTML = jobsNavigationBody;
    }
}

function displayJobsInfo(jobsInfoBody) {
    const jobsInfoDiv = document.getElementById('js-jobs-info');
    if (jobsInfoDiv) {
        jobsInfoDiv.innerHTML = jobsInfoBody;
    }
}

function getTranslatedRange(dateString, lang) {
    const isCurrent = /^(0[1-9]|1[0-2])\/\d{4}$/.test(dateString);
    const locale = lang === 'en' ? 'en' : 'pt-BR';
    const options = { month: 'short', year: 'numeric' };
    const [startMonthYear, endMonthYear] = dateString.split('-');

    const [startMonth, startYear] = startMonthYear.split('/');
    const startDate = new Date(`${startYear}-${parseInt(startMonth)}-01`);
    const translatedStartDate = startDate.toLocaleDateString(locale, options);

    if (isCurrent) {
        var translatedEndDate = lang === 'en' ? 'Present' : 'agora';
    } else {
        const [endMonth, endYear] = endMonthYear.split('/');
        const endDate = new Date(`${endYear}-${parseInt(endMonth)}-01`);
        var translatedEndDate = endDate.toLocaleDateString(locale, options);
    }

    return `${translatedStartDate} - ${translatedEndDate}`;
}