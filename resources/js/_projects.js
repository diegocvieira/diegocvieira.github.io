export default async function() {
    const response = await fetch('/resources/files/projects.json');
    const projects = await response.json();

    const featuredProjectsInfoBody = generateFeaturedProjectsInfo(projects);
    displayFeaturedProjectsInfo(featuredProjectsInfoBody);

    const projectsInfoBody = generateProjectsInfo(projects);
    displayProjectsInfo(projectsInfoBody);
}

function generateFeaturedProjectsInfo(projects) {
    return projects.filter(project => project.featured).map(project => {
        return `
            <div class="card">
                <div class="card__image">
                    <img src="${project.image}" alt="${project.title}" />
                </div>

                <div class="card__content">
                    <h3>
                        <a href="${project.website || project.github || 'javascript:void(0);'}" target="${project.website || project.github ? '_blank' : ''}" class="${project.website || project.github ? 'arrow-link' : ''}">
                            ${project.title}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                        </a>
                    </h3>

                    <div class="card__content__description">
                        <p>A web application for visualizing professionals and stores profiles, so than get in touch and schedule a service.</p>
                    </div>

                    <ul class="card__content__stack">
                        ${project.stack.map(stack => `<li>${stack}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }).join('');
}

function generateProjectsInfo(projects) {
    return projects.map(project => {
        return `
            <tr>
                <td>${project.release_year}</td>
                <td>${project.title}</td>
                <td class="is-hidden-desktop">${project.company}</td>
                <td class="is-hidden-desktop">
                    <ul class="card__content__stack">
                        ${project.stack.map(stack => `<li>${stack}</li>`).join('')}
                    </ul>
                </td>
                <td>
                    <a href="${project.website}" target="_blank" class="arrow-link">
                        ${project.title}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                    </a>
                </td>
            </tr>
        `;
    }).join('');
}

function displayFeaturedProjectsInfo(featuredProjectsInfoBody) {
    const featuredProjectsInfoDiv = document.getElementById('load-featured-projects');
    if (featuredProjectsInfoDiv) {
        featuredProjectsInfoDiv.innerHTML = featuredProjectsInfoBody;
    }
}

function displayProjectsInfo(projectsInfoBody) {
    const projectsInfoDiv = document.getElementById('load-projects');
    if (projectsInfoDiv) {
        projectsInfoDiv.innerHTML = projectsInfoBody;
    }
}