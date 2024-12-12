//Фиксация хедера
$(function(){
	var header = $('#header');
	var intro = $('#intro');
	var introHeight = intro.innerHeight();

	$(window).on('scroll', function(){		
		if ($(window).scrollTop() > introHeight)
			header.addClass('header--fixed');					
		else
			header.removeClass('header--fixed');				
	});

	//Плавный переход по ссылкам меню
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		var currentLinkID = $(this).data('scroll');
		var elementPosition = $(currentLinkID).offset().top;
		var headerHeight = $('#header').innerHeight();

		$('html, body').animate({
			scrollTop: elementPosition - headerHeight
		}, 700);
		//скрытие блока меню после клика
		$('#nav').removeClass('nav--mobile');
	});

	//адаптивное меню
	var menuButton = $('.burger__menu');
	menuButton.on('click', function(event){
		event.preventDefault();
		var menu = $('#nav');
		menu.toggleClass('nav--mobile');		
	});











});


