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
                        <a href="${job.link ? job.link : 'javascript:void(0);'}" target="${job.link ? '_blank' : ''}">
                            ${job.title} · ${job.name}
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