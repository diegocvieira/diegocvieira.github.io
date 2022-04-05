$(function() {
    // Open hamburger menu
    $('.navbar-burger').click(function() {
        $('.navbar-burger, .navbar-menu').toggleClass('is-active');
    });

    // Generate skills canvas
    var skill_size = '80';
    var entries = [
        { image: '/images/skills/wordpress.png', tooltip: 'Wordpress', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/drupal.png', tooltip: 'Drupal', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/macos.png', tooltip: 'MacOS', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/bulma.png', tooltip: 'Bulma', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/bootstrap.png', tooltip: 'Bootstrap', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/css.png', tooltip: 'CSS3', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/git.png', tooltip: 'Git', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/gulp.png', tooltip: 'Gulp', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/html.png', tooltip: 'HTML5', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/jquery.png', tooltip: 'Jquery', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/js.png', tooltip: 'JavaScript', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/laravel-mix.png', tooltip: 'Laravel Mix', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/laravel.png', tooltip: 'Laravel', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/less.png', tooltip: 'Less', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/linux.png', tooltip: 'Linux', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/materialize.png', tooltip: 'Materialize', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/mysql.png', tooltip: 'MySql', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/php.png', tooltip: 'PHP', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/postgresql.png', tooltip: 'PostgreSQL', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
        { image: '/images/skills/sass.png', tooltip: 'Sass', width: skill_size, height: skill_size, url: 'javascript: void(0)', target: '_self' },
    ];

    var settings = {
        entries: entries,
        width: 600,
        height: 600,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'transparent',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'bold', // bold
        tooltipFontStyle: 'normal', // italic
        tooltipFontStretch: 'normal', // wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10
    };

    $('#skills-canvas').svg3DTagCloud(settings);

    // Anchor links / Menu
    $('.anchor-link').on('click', function(e) {
        e.preventDefault();

        var href = $(this).attr('href');

        if ($(this).hasClass('navbar-item')) {
            $('.navbar-item').removeClass('active');
            $(this).addClass('active');
        }

        $('html, body').animate({
            scrollTop: $(href).offset().top + 25
        }, 900);
    });

    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();

        // Fixed header
        if (scrollPosition > $('#home').height()) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }

        // Active menu link on scroll
        $('.navbar-item').each(function() {
            var href = $(this).attr('href'),
                refElement = $(href).offset().top;

            if (scrollPosition >= refElement && scrollPosition < refElement + $(href).height()) {
                $('.navbar-item').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    // Projects section
    var projects = [
        {
            'title': 'Universidade Católica de Pelotas',
            'description': 'Portal da universidade',
            'image': 'images/projects/portal-ucpel.png',
            'stack': ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'PHP', 'Laravel', 'Voyager', 'MySQL'],
            'website': 'http://www.ucpel.edu.br',
            'github': false,
        },
        {
            'title': 'Idealiza',
            'description': '...',
            'image': 'images/projects/idealiza.png',
            'stack': ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'PHP', 'Laravel', 'Voyager', 'MySQL'],
            'website': 'https://www.vivaidealiza.com.br',
            'github': false,
        },
        {
            'title': 'GX Investimentos',
            'description': '...',
            'image': 'images/projects/gx.png',
            'stack': ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'PHP', 'Laravel', 'Voyager', 'MySQL'],
            'website': 'https://www.gxinveste.com.br',
            'github': false,
        },
        {
            'title': 'Zabaleta - Royal Park',
            'description': 'Landing page do empreendimento',
            'image': 'images/projects/royal-park.png',
            'stack': ['HTML5', 'CSS3', 'JavaScript', 'JQuery'],
            'website': 'http://royalpark.zabaleta.com.br',
            'github': false,
        },
        {
            'title': 'Naslojas',
            'description': 'Sistema para encontrar lojas da sua cidade',
            'image': 'images/projects/naslojas.png',
            'stack': ['HTML5', 'Sass', 'JavaScript', 'JQuery', 'PHP', 'Laravel', 'Laravel Mix', 'MySQL'], //addwebview
            'website': false,
            'github': 'https://github.com/diegocvieira/naslojas',
        },
        {
            'title': 'TV UCPel',
            'description': 'Tv da universidade',
            'image': 'images/projects/tv-ucpel.png',
            'stack': ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'PHP', 'Laravel', 'Voyager', 'MySQL'],
            'website': 'http://tv.ucpel.edu.br',
            'github': false,
        },
        {
            'title': 'Infochat',
            'description': 'Sistema para encontrar profissionais da sua cidade',
            'image': 'images/projects/infochat.png',
            'stack': ['HTML5', 'Sass', 'JavaScript', 'JQuery', 'PHP', 'Laravel', 'Laravel Mix', 'MySQL'], //add webview
            'website': false,
            'github': 'https://github.com/diegocvieira/Infochat',
        }
    ];

    $(projects).each(function(project_index, project) {
        var project_html =
            "<div class='column is-6'>"
                + "<article class='project__item'>"
                    + "<div class='project__img'>"
                        + "<div class='gatsby-image-wrapper' style='position: relative; overflow: hidden;'>"
                            + "<div aria-hidden='true' style='width: 100%; padding-bottom: 56.25%;'></div>"
                            + "<img aria-hidden='true' src='" + project.image + "' alt='' style='position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; transition-delay: 500ms;'>"
                        + "</div>";

        if (project.website) {
            project_html +=
                "<a href='" + project.website + "' target='_blank' class='website project__ribbon'>"
                    + "<div>"
                        + "<i class='fas fa-globe'></i>"
                        + "<span>Website</span>"
                    + "</div>"
                + "</a>";
        }

        if (project.github) {
            project_html +=
                "<a href='" + project.github + "' target='_blank' class='github project__ribbon'>"
                    + "<div>"
                        + "<i class='fab fa-github'></i>"
                        + "<span>GitHub</span>"
                    + "</div>"
                + "</a>";
        }

        project_html +=
            "<div class='project__hover'>"
                + "<div class='project__hover-icon'>"
                    + "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='45' height='45' viewBox='0 0 20 20'>"
                        + "<path fill='#fff' d='M19.872 10.166c-0.047-0.053-1.182-1.305-2.956-2.572-1.047-0.748-2.1-1.344-3.13-1.773-1.305-0.544-2.579-0.82-3.786-0.82s-2.481 0.276-3.786 0.82c-1.030 0.429-2.083 1.026-3.13 1.773-1.774 1.267-2.909 2.52-2.956 2.572-0.171 0.19-0.171 0.479 0 0.669 0.047 0.053 1.182 1.305 2.956 2.572 1.047 0.748 2.1 1.344 3.13 1.773 1.305 0.544 2.579 0.82 3.786 0.82s2.481-0.276 3.786-0.82c1.030-0.429 2.083-1.026 3.13-1.773 1.774-1.267 2.909-2.52 2.956-2.572 0.171-0.19 0.171-0.479 0-0.669zM12.574 6.438c0.907 0.763 1.426 1.873 1.426 3.062 0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.188 0.519-2.299 1.426-3.062 0.822-0.268 1.691-0.438 2.574-0.438s1.752 0.17 2.574 0.438zM16.317 12.606c-1.533 1.092-3.873 2.394-6.317 2.394s-4.784-1.302-6.317-2.394c-1.157-0.824-2.042-1.658-2.489-2.106 0.447-0.448 1.332-1.281 2.489-2.106 0.53-0.378 1.156-0.78 1.85-1.145-0.347 0.688-0.533 1.455-0.533 2.251 0 2.757 2.243 5 5 5s5-2.243 5-5c0-0.796-0.186-1.563-0.533-2.251 0.694 0.365 1.32 0.768 1.85 1.145 1.157 0.824 2.042 1.658 2.489 2.106-0.447 0.448-1.332 1.281-2.489 2.106z'></path>"
                    + "</svg>"
                + "</div>"
            + "</div>"
        + "</div>"
        + "<div class='project__header'>"
            + "<div class='project__info'>"
                + "<h5>" + project.title + "</h5>"
                + "<p>" + project.description + "</p>"
            + "</div>"
            + "<div class='project__tech'>";

        $(project.stack).each(function(stack_index, stack) {
            project_html +=
                "<span class='project__tech-item' style='transition-delay: 0." + stack_index + "s;'>"
                    + "<span>" + stack + "</span>"
                + "</span>";
        });

        project_html += "</div></div></article></div>";

        $('#projects').find('.columns').append(project_html);
    });
});
