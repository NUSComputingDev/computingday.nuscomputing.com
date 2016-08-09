$(document).ready(function () {

    /* STICKY NAV */
    $('.js--home').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /* Scroll on buttons */
    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--about-details').offset().top
        }, 500);
    });

    $('.js--scroll-to-partners').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--partners').offset().top
        }, 1000);
    });

    $('.js--scroll-to-highlights').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--highlights').offset().top
        }, 1000);
    });

    $('.js--scroll-to-contactform').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--contact').offset().top
        }, 1000);
    });

    /* Animations */
    $('.js--wp-1').waypoint(function (direction) {
        $(".js--wp-1").addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $(".js--wp-2").addClass('animated slideInLeft');
    }, {
        offset: '70%'
    });

    /* Navigation*/
    $('.js--nav').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round')
            icon.removeClass('ion-close-round');
        }
    });

    /* Countdown Timer */

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t
            , 'days': days
            , 'hours': hours
            , 'minutes': minutes
            , 'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = 'September 7 2016 10:00:00 GMT+0800';
    initializeClock('clockdiv', deadline);

});