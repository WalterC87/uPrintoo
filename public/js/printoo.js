$(document).ready(function(){
	$(".arrow-down, .top-link").click(function(event){        
        event.preventDefault();
    	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 5000);
    });

    $(".arrow-up").click(function(event){        
        event.preventDefault();
    	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 5000);
    });

	 $('#portada').parallax("50%", 0.1);   
	 $('#div-2').parallax("50%", 0.1);   
	 $('#div-3').parallax("50%", 0.1);   
	 $('#div-4').parallax("50%", 0.1);   
	 $('#div-5').parallax("50%", 0.1);   
	 $('#div-6').parallax("50%", 0.1);   
	 $('#div-7').parallax("50%", 0.1);   

    /*$('.submit').on('click',function(){
        document.forms['newlester_register_form'].submit();
    });*/

    if( $(".animated")[0] ) {
        $('.animated').css('opacity','0');
    }
    
    $('.triggerAnimation').waypoint(function() {
        var animation = $(this).attr('data-animate');
        console.log(animation);
        $(this).css('opacity','');
        $(this).addClass(animation);
    },
    {
        offset: '80%',
        triggerOnce: true
    });

    $('#pull-menu').on('click', function(e){
        e.preventDefault();
        $('#menu-responsive').slideToggle();
    })

});