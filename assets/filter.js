$( document ).ready(function() {
	//desktop
	$('.filter-title').on('click', function() {
		//$('.filter-block.active').removeClass('active');
		if($(this).parent('div').hasClass('active')) {
			$(this).next('ul').parent('div').removeClass('active');
		}
		else {
			$(this).next('ul').parent('div').addClass('active');
		}
	});

	//add help icons to relevent filter types

	//size
	//$('.filter-title:contains("Brand")').parent('div').prepend('<a href="" title="More info" class="info-icon" data-modal="size-modal"><img src="/images/filters/info-icon.png" alt="info" /></a>');

	//curtain top type
	//$('.filter-title:contains("Price")').parent('div').prepend('<a href="" title="More info" class="info-icon" data-modal="heading-modal"><img src="/images/filters/info-icon.png" alt="info" /></a>');

	$('.filter-block').on( "click", ".info-icon", function(e) {
		e.preventDefault();
		var open_modal = '#' + $(this).data('modal');
		var x = $(this).offset();
		
		//var block_width = $('.refine-filter').width() + 10;
		//$('#size-modal').show().css({top: x.top+'px', left: (x.left + block_width)+'px'});
		
		var block_width;
		if($(window).width() > 768) {
			block_width = (x.left + 30);
			$(open_modal).show().css({top: x.top+'px', left: block_width+'px'});
		} else {
			block_width = 60;
			$(open_modal).show().css({top: x.top+'px', right: block_width+'px'});
		}

		

	});

	if($( ".filter-block ul li input:checked" ).length > 0) {
		$( ".filter-block ul li input:checked" ).closest('ul').show().closest('.filter-block').addClass('active');
	}

	$('.filter-modal .close').on('click', function(e) {
		e.preventDefault();
		$(this).parent('div').hide();
	});

	//mobile
	$('.sort-filter-block .tabs li').on('click', function() {
		var open_block = '.' + $(this).data('tab');
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(open_block).hide().removeClass('active');
		} else if(open_block == '.refine-by-block') {
			//do animation
			$('.sort-filter-block .tabs li').removeClass('active');
			$(this).addClass('active');
			$('.tab-block').hide().removeClass('active');
			$(open_block).show().addClass('active');
		} else {
			$('.sort-filter-block .tabs li').removeClass('active');
			$(this).addClass('active');
			$('.tab-block').hide().removeClass('active');
			$(open_block).show().addClass('active');
		}
	});

	$( ".filter-block:first-of-type ul" ).show().parent('div').addClass('active');

	function submitForm() {
		$('#filter_form').submit();
	}

	
	$('.filter-clicky').on('click', function(){
		setTimeout( submitForm , 500 ); //delay get around safari display issue where box doesn't tick before submit
	});

	//removes position relative on col-main while the filters are open
	$('li[data-tab="refine-by-block"]').on('click', function(){
		$('.col-main').toggleClass('filter-on');
		checkApply();
	});

	$('.refine-close').on('click', function(){
		$('.refine-by-block').removeClass('active');
		$('li[data-tab="refine-by-block"]').removeClass('active');
		$('.col-main').removeClass('filter-on');
	});

	$('.form-filter input').on('click', function(){
		checkApply();
	});

});

function checkApply(){
	if ($(".form-filter input:checkbox:checked").length > 0) {
		$('.refine-apply').css('visibility', 'visible');
	} else {
		$('.refine-apply').css('visibility', 'hidden');
	}
}