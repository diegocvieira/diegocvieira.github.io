//! Add webview to naslojas and infochat
export default function () {
    fetch('/resources/files/projects.json').then(function(response) {
        return response.json();
    }).then(function(projects) {
        getFeaturedProjects(projects);
        getProjects(projects);
    });

    function getFeaturedProjects(projects) {
        let body = '';

        projects.map(function(project) {
            if (project.featured !== true) {
                return false;
            }

            let stack = '';
            project.stack.map(item => stack += `<li>${item}</li>`);

            body += `
                <div class="featured-project">
                    <div class="featured-project-content">
                        <h3 class="featured-project-content-title">${project.title}</h3>
                        <p class="featured-project-content-release">${project.release_year}</p>
                        <div class="featured-project-content-description">
                            <p>${project.description}</p>
                        </div>
                        <ul class="featured-project-content-stack">${stack}</ul>
                        <div class="featured-project-content-links">
                            ${getGithub(project.github)}
                            ${getWebsite(project.website)}
                        </div>
                    </div>
                    <div class="featured-project-image">
                        <img src="${project.image}" alt="${project.title}" />
                    </div>
                </div>
            `;
        });

        let featuredProjectsDiv = document.getElementById('js-featured-projects');
        featuredProjectsDiv.innerHTML = body;
    }

    function getProjects(projects) {
        let body = '';

        projects.map(function(project) {
            if (project.featured === true) {
                return false;
            }

            body += `
                <tr class="project">
                    <td class="project-year">${project.release_year}</td>
                    <td class="project-title">${project.title}</td>
                    <td class="project-company is-hidden-mobile">${project.company}</td>
                    <td class="project-stack is-hidden-mobile">${project.stack.join(' · ')}</td>
                    <td class="project-link">
                        ${getGithub(project.github)}
                        ${getWebsite(project.website)}
                    </td>
                </tr>
            `;
        });

        let projectsDiv = document.getElementById('js-projects');
        projectsDiv.innerHTML = body;
    }

    function getGithub(link) {
        let github = '';

        if (link) {
            github = `
                <a href="${link}" target="_blank" title="GitHub" class="is-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
            `;
        }

        return github;
    }

    function getWebsite(link) {
        let website = '';

        if (link) {
            website = `
                <a href="${link}" target="_blank" title="Website" class="is-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            `;
        }

        return website;
    }
}