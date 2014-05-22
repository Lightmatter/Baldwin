$(document).ready(function(){
    $('.highlight').hover(function(){
        $(this).addClass("animated pulse")
    })

    $('.play-video').hover(function(){
        $(this).addClass("animated pulse")
    })


//width less than 786
    if (( $(window).width() <= 768 || $(window).width() <= 1024 )) {
        $('.fliptext0').insertBefore('.flipimage0');
        $('.fliptext1').insertBefore('.flipimage1');
        $('.fliptext2').insertBefore('.flipimage2');
    }
    else {
        $('.flipimage0').insertBefore('.fliptext0');
        $('.flipimage1').insertBefore('.fliptext1');
        $('.flipimage2').insertBefore('.fliptext2');
    }
})

//show iframe upon clicking butotn.
$('.play-video').click(function() {
    $('iframe').removeClass('hide')
    $('.play-video').hide()
})



//5 promises rotate images


$('.highlight').click(function(){

    $('.highlight').children('')

 $('.main-holder').hide();

 //recognize the small promise you clicked
 //store that class as a variable
 //show the main image that matches that class


    //hide the main image class
    //show the small promise class you clicked that is the main promise

});

;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


        })(jQuery)
