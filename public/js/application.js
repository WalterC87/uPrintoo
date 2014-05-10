/*var sticky = document.querySelector('#navigation');
//var origOffsetY = sticky.offsetTop;
var origOffsetY = 240;

function onScroll(e) {
    if( window.scrollY >= origOffsetY){
        //debugger;
        sticky.classList.add('fixed')
    }else{
        sticky.classList.remove('fixed');
    }
}

document.addEventListener('scroll', onScroll);*/

$(document).ready(function(){

    $.ajax({
        type : 'GET',
        //url  : '//127.0.0.1:3000/cities',
        url  : '//162.243.96.184/:3000/cities',
        dataType : 'jsonp'    
    })

    .done(function(data){
        data.cities.forEach(function (item){
            $("<option value=" + item.idciudad +">" +item.descripcion+ "</option>" ).appendTo("#cmbOtros"); 
        })
    }) 

    $('.submit').mouseover(function(){
        $(this).children().attr('src','/img/registro/registrar_click.png')
    }); 

    $('.submit').mouseout(function(){
        $(this).children().attr('src','/img/registro/registrar.png')
    });

    /*$('.submit').on('click',function(){
        document.forms['user_register_form'].submit();
    }); */
    /**
    *   Global variables.
    */
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    var navigationHeight = $("#navigation").outerHeight();
    
    /**
    *   ON RESIZE, check again
    */
    $(window).resize(function () {
        pageWidth = $(window).width();
        pageHeight = $(window).height();
    });
    
    
    /**
    *   ON LOAD
    */

    /* Initialize scroll so if user droped to other part of page then home page. */
    $(window).trigger('scroll');
    
    /* Fix navigation. */
    /*$('#navigation').fixedonlater({
        speedDown: 250,
        speedUp: 100
    });*/
    
    /* Centralize elements on page. */
    $('.centralized').centralized({
        delay: 0,
        fadeSpeed: 500
    });
    
    /* Make embeded videos responsive. */
    $.fn.responsivevideos();
    
    /* Carousel "Quote slider" initialization. */
    $('#quote-slider').each(function(){
        if($('.item', this).length) {
            $(this).carousel({
                interval: 20000
            });
        }
    });
    
    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollOffset: navigationHeight - 10,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
     });
    
    /* 
    *  Paralax initialization.
    *  Exclude for mobile.
    */
    if(pageWidth > 980){
        /* Dont user paralax for tablet and mobile devices. */
        $('#page-welcome').parallax("0%", 0.2);
        $('#page-features').parallax("0%", 0.07);
        $('#page-twitter').parallax("0%", 0.1);
    }
    
    /* Emulate touch on table/mobile touchstart. */
    if(typeof(window.ontouchstart) != 'undefined') {
        var touchElements = [".social-icons a", ".portfolio-items li", ".about-items .item"];
        
        $.each(touchElements, function (i, val) {
            $(val).each(function(i, obj) {
                $(obj).bind('click', function(e){
                
                    if($(this).hasClass('clickInNext')){
                        $(this).removeClass('clickInNext');
                    } else {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        $(this).mouseover();
                        $(this).addClass('clickInNext');
                    }
                });
            });
        });
    }

    /**
    *   BLOCK | Navigation
    *
    *   Smooth scroll
    *   Main menu links
    *   Logo click on Welcome page
    */
    $('#page-welcome .logo a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - navigationHeight + 4
        }, 800);
        
        /* Fix jumping of navigation. */
        setTimeout(function() {
            $(window).trigger('scroll');
        }, 900);
        
        return false;
    });
    
    /**
    *   PAGE | Welcome 
    *
    *   Initialize slider for welcome page H1 message.
    */
   $('#texto-info ul.slides').bxSlider({
        mode: 'horizontal',
        auto: true,
        minSlides: 1,
        responsive: true,
        touchEnabled: true,
        pager: false,
        controls: false,
        useCSS: false,
        pause: 2500
    });

   $('#pages-clients ul.slides').bxSlider({
        mode: 'horizontal',
        auto: true,
        minSlides: 1,
        responsive: true,
        touchEnabled: true,
        pager: false,
        controls: false,
        useCss: false,
        pause: 3500
   });
   
    /**
    *   PAGE | WORK
    *
    *   .plugin-filter - Defines action links.
    *   .plugin-filter-elements - Defines items with li.
    */
    $('.plugin-filter').click(function(){
        return false;
    });
    $('.plugin-filter-elements').mixitup({
        targetSelector: '.mix',
        filterSelector: '.plugin-filter',
        sortSelector: '.sort',
        buttonEvent: 'click',
        effects: ['fade','rotateY'],
        listEffects: null,
        easing: 'smooth',
        layoutMode: 'grid',
        targetDisplayGrid: 'inline-block',
        targetDisplayList: 'block',
        gridClass: '',
        listClass: '',
        transitionSpeed: 600,
        showOnLoad: 'all',
        sortOnLoad: false,
        multiFilter: false,
        filterLogic: 'or',
        resizeContainer: true,
        minHeight: 0,
        failClass: 'fail',
        perspectiveDistance: '3000',
        perspectiveOrigin: '50% 50%',
        animateGridList: true,
        onMixLoad: null,
        onMixStart: null,
        onMixEnd: null
    });
    
    /**
    *   PAGE | Twitter 
    *
    *   Pull latest tweets from user.
    *   Configuration: /plugins/twitter/index.php
    */
    $('#twitterfeed-slider').tweet({
        modpath: 'plugins/twitter/',
        username: 'TheGridelicious',
        count: 3
    });
    
    $('#twitterfeed-slider').tweetCarousel({
        interval: 7000,
        pause: "hover"
    });
});


/**
*   Ajax request.
*   Start loading.
*   Append loading notification.
*/
/*$( document ).ajaxSend( function() {
    if($(".loading").length == 0) {
        $("body").append('<div class="loading"><div class="progress progress-striped active"><div class="bar"></div></div></div>');
        $(".loading").slideDown();
        $(".loading .progress .bar").delay(300).css("width", "100%");
    }
});*/

/**
*   Reinitialize Scrollspy after ajax request is completed.
*   Refreshing will recalculate positions of each page in document.
*   Time delay is added to allow ajax loaded content to expand and change height of page.
*/
$( document ).ajaxComplete(function() {
    /* Remove loading section. */
    $(".loading").delay(1000).slideUp(500, function(){
        $(this).remove();
    });
    
    /* Portfolio details - close. */
    $(".close-portfolio span").click(function(e) {
        $(".registro").delay(500).slideUp(500, function(){
            $(this).remove();
        });
        
        window.location.hash= "!";
        return false;
    });
});


function Numeros(evt){
    var key = evt.keyCode ? evt.keyCode : evt.which;
    return (key <= 40 || (key >= 48 && key <= 57));
}

function userOptions(txt,opt){
    txt.value = opt;
}
