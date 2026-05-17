import translations from '../files/languages.json';

export default async function() {
    const response = await fetch('/resources/files/jobs.json');
    const jobs = await response.json();
    const jobsInfoBody = generateJobsInfo(jobs);
    displayJobsInfo(jobsInfoBody);
}

function experienceDescriptionCount(slug) {
    const maxForLang = lang => {
        const dict = translations[lang];
        if (!dict) return 0;
        const prefix = `exp_${slug}_desc`;
        let maxIndex = 0;
        for (const key of Object.keys(dict)) {
            if (!key.startsWith(prefix)) continue;
            const suffix = key.slice(prefix.length);
            const n = Number.parseInt(suffix, 10);
            if (Number.isInteger(n) && String(n) === suffix) {
                maxIndex = Math.max(maxIndex, n);
            }
        }
        return maxIndex;
    };

    return Math.max(maxForLang('en'), maxForLang('pt')) || 2;
}

function generateJobsInfo(jobs) {
    return jobs.map(job => {
        const stackItems = job.stack.map(item => `<li>${item}</li>`).join('');
        const descCount = experienceDescriptionCount(job.slug);
        const descParagraphs = Array.from({ length: descCount }, (_, index) =>
            `<p data-i18n="exp_${job.slug}_desc${index + 1}"></p>`
        ).join('');

        return `
            <div class="card">
                <div class="card__date">
                    <p data-i18n="exp_${job.slug}_date"></p>
                </div>

                <div class="card__content">
                    <h3>
                        <a href="${job.link ? job.link : 'javascript:void(0);'}" target="${job.link ? '_blank' : ''}" class="${job.link ? 'arrow-link' : ''}">
                            ${job.title} · ${job.name}
                            <svg class="${job.link ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                        </a>
                    </h3>

                    <div class="card__content__description arrow-icon">
                        ${descParagraphs}
                    </div>

                    <ul class="card__content__stack">${stackItems}</ul>
                </div>
            </div>
        `;
    }).join('');
}

function displayJobsInfo(jobsInfoBody) {
    const jobsInfoDiv = document.getElementById('load-jobs');
    if (jobsInfoDiv) {
        jobsInfoDiv.innerHTML = jobsInfoBody;
    }
}