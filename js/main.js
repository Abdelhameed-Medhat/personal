$(function(){
    
    'use strict';
    
//adjust slider height
    var winhigh = $(window).height(),
        navbarhigh = $('.navbar').innerHeight();
    $(".slider, .carousel-item").height(winhigh - navbarhigh);

//smooth scroll
//    $('.navbar ul li a').click(function(){
//        $('html , body').animate({
//            scrollTop: $('#' + $(this).data('value')).offset().top
//        }, 1000 );
//    });
    
    
//Featued Work Shuffle
//    $('.works ul li').on('click', function(){
//       $(this).addClass('active').siblings().removeClass('active'); 
//         if ($(this).data('class') === 'all'){
//        $('.cards .card').css('opacity', 1);
//            } else{
//                $('.cards .card').css('opacity', '.08');
//                $($(this).data('class')).parent().css('opacity', 1)
//        }
//    });
   
    
//convert navbar background
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('.navbar').addClass('shrink');
    }
    else {
    $('.navbar').removeClass('shrink');
    }
    });
    
});