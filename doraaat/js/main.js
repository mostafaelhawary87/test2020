$(document).ready(function(){

 

    $('.side-sell').owlCarousel({
        autoplay: false,
        rtl: true,
        margin:30,
        loop:false,
        
        dots:true,
       
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            991: {
                items: 3   
            },
            1199: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    $('.least_slider').owlCarousel({
	
		autoplay:false,
		rtl:true,
        loop: false,
        dots:true,
		margin:18,
	
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			991:{
				items:4
			},
			1199:{
				items:4
			},
			1200:{
				items:3
			}
		}
	}); 

    $('.add-cour').owlCarousel({
        autoplay: false,
        rtl: true,
        margin:30,
        loop:true,
        items:6,
        dots:true,
       
       
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            991: {
                items: 3   
            },
            1199: {
                items: 3
            },
            1200: {
                items:3
            }
        }
    });


$("#openNav").click( function() {

    $('.sidenav').addClass('open');
    $('.overlay').fadeIn();
    $('body').addClass('ovh');
});

$(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
});
$("h5[data-toggle='collapse']").on('click', function() {
    $(this).parent().children('.collapse').collapse('toggle');
    $(this).parent().parent().siblings().find('.collapse.in').collapse('hide');
});


});
//Special offers slider Transparency functions
function transp() {
    var xx = $('.partners .owl-item.active');
    xx.first().find('.part-item').addClass('transp');
    xx.last().find('.part-item').addClass('transp');
}

function untransp() {
    $('.partners .owl-item').each(function () {
        $(this).find('.part-item').removeClass('transp');
    });
}

function transplg() {
    var xx = $('.partners .owl-item.active');
    xx.first().find('.part-item').addClass('transp');
    xx.last().find('.part-item').addClass('transp');
}

//Special offer slider

$(".partners .owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    dots: false,
    margin: 22,
   
    center: true,
    rtl: true,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        480: {
            items: 3,
            dots: true
        },
        768: {
            items: 4,
            dots: true
        },
        991: {
            items: 4,
            center: true,
            onInitialized: transp,
            onTranslate: untransp,
            onTranslated: transp,
            onDragged: untransp
        },
        1199: {
            items: 6,
            onInitialized: transp,
            onTranslate: untransp,
            onTranslated: transp,
            onDragged: untransp
        },
        1400: {
            items: 8,
            onInitialized: transplg,
            onTranslate: untransp,
            onTranslated: transplg,
            onDragged: untransp
        }
    }
});

$(function() {
  
    // contact form animations
    $('#contact').click(function() {
      $('#contactForm').fadeIn();
      $('.contact-over').fadeIn();
     
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");
  
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          container.fadeOut();
          $('.contact-over').fadeOut();
      }
    });
    
  });

  $('#contactForm button.close').on('click ', function(event) {
    $('#contactForm').fadeOut();
    $('.contact-over').fadeOut();
});
if ($(window).width() <= 425){ 
    $(".wow").removeClass("wow");
    }
    

    $('.formBtn').click(function(){
        $("#contactForm button.close").trigger('click');
    });