$(document).ready(function(){

     $(".arrow-down").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
        
      });

     

    /*$.ajax({
        type : 'GET',
        //url  : '//127.0.0.1:3000/cities',
        url  : '//162.243.96.184/:3000/cities',
        dataType : 'jsonp'    
    })

    .done(function(data){
        data.cities.forEach(function (item){
            $("<option value=" + item.idciudad +">" +item.descripcion+ "</option>" ).appendTo("#cmbOtros"); 
        })
    }) */


    /*$('.submit').on('click',function(){
        document.forms['user_register_form'].submit();
    }); */

    /**
    *   Global variables.
    */
    /*var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    var navigationHeight = $("#navigation").outerHeight();
    
    /**
    *   ON RESIZE, check again
    */
    /*$(window).resize(function () {
        pageWidth = $(window).width();
        pageHeight = $(window).height();
    });*/
    
    
    /**
    *   ON LOAD
    */

    /* Initialize scroll so if user droped to other part of page then home page. */
    /*$(window).trigger('scroll');*/
    
    
    /* Scroll spy and scroll filter */
    /*$('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollOffset: navigationHeight - 10,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
     });*/
    
    /* 
    *  Paralax initialization.
    *  Exclude for mobile.
    */
    /*if(pageWidth > 980){
        $('#page-welcome').parallax("0%", 0.2);
        $('#page-features').parallax("0%", 0.07);
        $('#page-twitter').parallax("0%", 0.1);
    }*/

}

/*function Numeros(evt){
    var key = evt.keyCode ? evt.keyCode : evt.which;
    return (key <= 40 || (key >= 48 && key <= 57));
}

function userOptions(txt,opt){
    txt.value = opt;
}*/
