$( document ).ready(function() {
		var CC_Selected = false;

		function set_cc_state(isCC) {
			if(isCC == true) {
		    	$('.with-delivery').hide();
		    	$('.without-delivery').show();
		    	$('#paypal-btn').hide();
		    	CC_Selected = true;
			}
			else {
		    	$('.with-delivery').show();
		    	$('.without-delivery').hide();
		    	$('#paypal-btn').show();
		    	CC_Selected = false;
			}
		}

    	$('.radio-button input[checked="checked"]').closest('div').addClass('active');

		$('.radio-button input').click(function(e) {
			$('.radio-button').removeClass('active');
		    $(this).closest('div').addClass('active');
		});

	    $('.radio-button input#delivery-code-cc').click(function(e) {
	    	set_cc_state(true);
	    });

	    $(".delivery-item").click(function(e) {
	    	set_cc_state(false);
	    });

	    if($('body').hasClass('checkout-cart-index')) {
	    	$('#subscribe-form').hide();
	    }

	    $('#apply-coupon').click(function(e) {
	        var code_entered = $('#promotion-code').val();
			var reward_field = $('#rewardcardcode').val();
			
			if ( (code_entered.length > 12) && (reward_field.length == 0)) {
				return false;
			}

	        $('.basket-promotion-code').val(code_entered);
	        $('.the-cart-form:visible').submit();

	        $('.the-cart-form').each(function() {
	            if($(this).css('display') != 'none') {
	                $(this).submit();
	            }
	        });
	    });

	    $('#proceed-button').click(function(e) {
	    	e.preventDefault();
	    	if(CC_Selected == true) {
	    		window.location='/click-and-collect-checkout.html';
	    	}
	    	else {
	    		window.location='/quick-checkout.html';
	    	}
	    });

	    $('.delivery-code-select').change(function(e) {
	    	var dc_selected = $('.delivery-code-select').val();
	    	if(dc_selected == 'cc-select') {
	    		set_cc_state(true);
	    	}
	    	else {
	    		set_cc_state(false);
	    		iposChangeDeliveryCode(dc_selected);
	    	}
	    });

  });
