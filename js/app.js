$(function() {
    // Open hamburger menu
    $('.navbar-burger').click(function() {
        $('.navbar-burger, .navbar-menu').toggleClass('is-active');
    });

    // Generate skills canvas
    var skill_size = '80';
    var entries = [
        { image: '/images/skills/ajax.png', tooltip: 'Ajax', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/Ajax_(programa%C3%A7%C3%A3o)', target: '_blank' },
        { image: '/images/skills/bootstrap.png', tooltip: 'Bootstrap', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/Bootstrap_(framework_front-end)', target: '_blank' },
        { image: '/images/skills/css.png', tooltip: 'CSS', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/Cascading_Style_Sheets', target: '_blank' },
        { image: '/images/skills/git.png', tooltip: 'Git', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/Git', target: '_blank' },
        { image: '/images/skills/gulp.png', tooltip: 'Gulp', width: skill_size, height: skill_size, url: 'https://en.wikipedia.org/wiki/Gulp.js', target: '_blank' },
        { image: '/images/skills/html.png', tooltip: 'HTML', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/HTML', target: '_blank' },
        { image: '/images/skills/jquery.png', tooltip: 'Jquery', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/JQuery', target: '_blank' },
        { image: '/images/skills/js.png', tooltip: 'JavaScript', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/JavaScript', target: '_blank' },
        { image: '/images/skills/laravel-mix.png', tooltip: 'Laravel Mix', width: skill_size, height: skill_size, url: 'https://laravel.com/docs/6.x/mix', target: '_blank' },
        { image: '/images/skills/laravel.png', tooltip: 'Laravel', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/Laravel', target: '_blank' },
        { image: '/images/skills/less.png', tooltip: 'Less', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/LESS', target: '_blank' },
        { image: '/images/skills/linux.png', tooltip: 'Linux', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/Linux', target: '_blank' },
        { image: '/images/skills/materialize.png', tooltip: 'Materialize', width: skill_size, height: skill_size, url: 'https://materializecss.com/about.html', target: '_blank' },
        { image: '/images/skills/mysql.png', tooltip: 'MySql', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/MySQL', target: '_blank' },
        { image: '/images/skills/php.png', tooltip: 'PHP', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/PHP', target: '_blank' },
        { image: '/images/skills/postgresql.png', tooltip: 'PostgreSQL', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/PostgreSQL', target: '_blank' },
        { image: '/images/skills/sass.png', tooltip: 'Sass', width: skill_size, height: skill_size, url: 'https://pt.wikipedia.org/wiki/Sass_(linguagem_de_folhas_de_estilos)', target: '_blank' },
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
        speed: 2,
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
});
