require(['./main'], function (main) {




	require(['jquery', 'tweenmax', 'components/bxslider', 'waypoints', 'global'], function($, tweenmax, $bxslider, waypoints, global) {
		

		var h = {

			banner_anim: function() {


			    function start_anim() {
					TweenLite.to('.home-banner__anim', 1, {opacity:1, delay:0.5});
					TweenLite.to('#platform, #pc', 1, {top:'0', ease:Back.easeOut, delay:0.5});

					TweenLite.to('#card-base', 1.1, {top:'-2%', ease:Back.easeOut, delay:0.5});
					TweenLite.to('#card-chip', 1.2, {top:'-3%', delay:0.5});

					TweenLite.to('#email', 1.2, {top:'-2%', ease:Back.easeOut, delay:0.5});

					TweenLite.to('#pc', 1.2, {top:'-1%', ease:Back.easeOut, delay:0.5});

					TweenLite.to('#chart-base', 1, {top:'0', ease:Back.easeOut, delay:0.5});
					TweenLite.to('#chart-1', 1, {scaleY:1, top:'34.2%', ease:Expo.easeOut, delay:0.5});
					TweenLite.to('#chart-2', 1, {scaleY:1, top:'41.7%', ease:Expo.easeOut, delay:0.5});
					TweenLite.to('#chart-3', 1, {scaleY:1, top:'55.7%', ease:Expo.easeOut, delay:0.5});

					TweenLite.to('#cloud', 1.3, {top:0, left:0, ease:Expo.easeOut});      
					TweenLite.to('#social', 1.2, {top:0, left:0, ease:Expo.easeOut});  
					TweenLite.to('#mobile', 1.1, {top:0, ease:Expo.easeOut});  
					TweenLite.to('#pc', 1.3, {top:0, left:0, ease:Expo.easeOut});     

					TweenLite.to('#rainbow', 1.1, {opacity:1, delay:0.5, left:0});  

			    }


					/* init anim items and set initial properties */

					TweenLite.to('.l-home-banner__3-cols > div', 1, {opacity:1, delay:0.4});
					TweenLite.to('.home-banner__anim img', 1, {opacity:1});
					TweenLite.to('.l-home-banner .btn--arrow-down', 2, {opacity:1, delay:0.5});


				    start_anim();

			},

			slider_features: function() 
			{
				var isSliderRendered = false;

				$('#slider-features').waypoint(function(direction) {
					if (isSliderRendered) {
						return;
					}
					$('#slider-features').bxSlider({
						nextSelector: '.btn-arrow--right',
						prevSelector: '.btn-arrow--left',
						nextText: '',
						prevText: '',
						pagerCustom: '#slider-features-pager',
						touchEnabled: false
					});

					isSliderRendered = true;
				}, { offset: '100%' });
			},



			shortcuts: function() {
				$('.l-shortcuts--home').clone().insertAfter('.l-shortcuts--home').addClass('sticky');

				$('.l-main').waypoint(function(direction) {
				  if (direction == 'down')
				  {
				  		$('.l-shortcuts--home.sticky').slideToggle(200);
				  }
				  else {
				  		$('.l-shortcuts--home.sticky').slideToggle(100);
				  }
				}, { offset: 0 });
			},


			info_box_anim: function() {

				$('.info-box').waypoint(function(direction) {
					TweenMax.to('.info-box__product-tour img', 1.5, {right:'-85%', ease:Expo.easeOut});
					TweenMax.to('.info-box__product-tour .btn', 2, {opacity:1, delay: 0.5, ease:Expo.easeOut});  
				}, { offset: 500 });

				
			},



			init: function() {
				if ($(window).width() > 730) {
					this.banner_anim();
				}

				this.slider_features();
				this.shortcuts();
				this.info_box_anim();


				/* slide to main section (button under main banner) */
				$('.btn--arrow-down').on('click', function() 
				{
					var targetOffset = $('#main').offset().top+5;
					$('html,body').animate({scrollTop:targetOffset}, 500);

					return false;
				});


			}
		};

		h.init();
		global.init();
	});



});