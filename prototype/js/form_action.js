$(document).ready(function(){

  //   $('.addRoom').on('click', function(){
  //       $('<div/>', {
		//     'class':'room',
		//     'style':'cursor:pointer;font-weight:bold;',
		//     'html':''
		// }).appendTo('.rooms');
  //   });


	$('.addRoom').on('click', function(){
		$('.room').first().clone(1).appendTo( ".rooms" ).fadeIn();
	});

	// childrensInput

	$('.childrensInput').on('click', function(){
		$('.childrensAge').fadeIn();
	});

	$('.roomDel').on('click', function(){
	    $(this).closest(".room").fadeOut(160);
	    $('.reservation').fadeOut(100);
	    $('.childrensAge').hide();
	});

	$('.searchButton').on('click', function(event){
			event.preventDefault()
			var child = $('.rooms').children().size();
			if( child == 1) {
				$('.room').first().clone().appendTo( ".rooms" ).fadeIn();
			}

			$('.variants').fadeIn(100);
		
	});

	$('.variants .close').on('click', function(){
		$('.variants').fadeOut(100);
		$('.reservation').fadeOut(100);
	});


	// choice

	$('.broBtn').on('mouseenter', function(){
		 $(this).closest(".choice").find('.row').css('background-color', 'rgb(207, 207, 207)');
	}).mouseleave(function(){$(this).closest(".choice").find('.row').css('background-color', 'rgb(187, 187, 187)');});


	// $('.broBtn').on('click', function(){
	// 	 $(this).closest(".choice").find('.row').css('background-color', '#fff');
	// });

	// reservation

	// $('.broBtn').on('click', function(){
	// 	$('.reservation').fadeIn(200);
	// });

	$('.broBtn').on('click', function(){
		// alert('Бронь оплачена');
		$('.variants').fadeOut(200);
		// $('.reservation').fadeOut(200);
	});

	// local links 
	$('.infoBlock a').attr("href", "file:///C:/Documents%20and%20Settings/v_vostrikov/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/gupmc/prototipe/sanatorium.html");
	$('.header-logo').attr("href", "file:///C:/Documents%20and%20Settings/v_vostrikov/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/gupmc/prototipe/index.html");
	$('.footer-nav a:eq( 1 )').attr("href", "file:///C:/Documents%20and%20Settings/v_vostrikov/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/gupmc/prototipe/recreation.html")

});