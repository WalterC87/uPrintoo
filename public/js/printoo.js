$(document).ready(function(){
	$(".arrow-down").click(function(event){        
        event.preventDefault();
    	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 5000);
    });

    $('#portada').parallax("50%", 0.1);
});