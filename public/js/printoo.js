$(document).ready(function(){
	$(".arrow-down").click(function(event){        
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

    $('.submit').on('click',function(){
        document.forms['newlester_register_form'].submit();
    });




});