$(function () {

    $(".accordion a").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("active") == false) {
            $(".accordion a").removeClass("active");
            $(".accordion p").slideUp();
            $(this).addClass("active");
            $(this).next("p").slideDown("p");
        }
        else {
            $(".accordion a").removeClass("active");
            $(".accordion p").slideUp();
        }
    });


    $(".top").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000)
    });

    $(".wrap-1 nav a").click(function (e) {
        e.preventDefault();
        var id = $(this).attr("href");
        var top = $(id).offset().top;
        //var nh=$(".wrap-1 nav").outerHeight();

        $("html,body").animate({
            scrollTop: top - 80
        })
    });

    $("#portfolio .btn").click(function () {
        $("#portfolio .btn").removeClass("active");
        $(this).addClass("active");

        if ($(this).text() == "All") {
            $("#portfolio .row:nth-child(2) .col-4").fadeIn();
        }
        else if ($(this).text() == "Website") {
            $("#portfolio .row:nth-child(2) .col-4").fadeOut(0);
            $("#portfolio .row:nth-child(2) .col-4:nth-child(1),#portfolio .row:nth-child(2) .col-4:nth-child(2),#portfolio .row:nth-child(2) .col-4:nth-child(3)").fadeIn();
        }
        else if ($(this).text() == "Branding") {
            $("#portfolio .row:nth-child(2) .col-4").fadeOut(0);
            $("#portfolio .row:nth-child(2) .col-4:nth-child(4),#portfolio .row:nth-child(2) .col-4:nth-child(5),#portfolio .row:nth-child(2) .col-4:nth-child(6)").fadeIn();
        }

    });


    $(".signup").click(function () {
        $("body").append('<div class="overlay"></div>')
        $("body").append('<div class="signupform"><button class="cross">&times;</button><form><label>Email: <input type="email" required></label><label>Password: <input type="password" required></label><button class="btn">Send</button></form></div>');

        $(".signupform .cross").click(function () {
            $(".overlay, .signupform").remove();
        });
        $(window).keydown(function (e) {
            if (e.which == 27) {
                $(".overlay, .signupform").remove();
            }
        })
    });


    /* plugins */

    $(".box1").magnificPopup({ delagate: "a", type: 'image', });

    $(".reg").magnificPopup({ type: 'image' });

    $(".reviews").bxSlider({
        //mode:"vertical",
        pause: 2000,
        auto: true,
        controls: false,
        autoHover: true
    })


    $("#show").click(function () {

        $(".hide").animate({
            height: 'toggle'
        });




        // $("#show").animate({

        // })

    })


    $("#display").click(function () {
        $(".hidden").animate({
            height: 'toggle'
        });

    })

// wrap-3
    $('.text-1').waypoint(function () {
        $('.text-1').addClass('animate__animated animate__fadeInLeftBig')
    }, { offset: "50%" });
    
    $('.services-1').waypoint(function () {
        $('.services-1').addClass('animate__animated animate__fadeInRightBig')
    }, { offset: "50%" });
    
    // wrap-5
    $('.text-2').waypoint(function () {
        $('.text-2').addClass('animate__animated animate__fadeInLeftBig')
    }, { offset: "30%" });
});


// var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//       notify('I am 20px from the top of the window')
//     },
//     offset: 20
//   })
