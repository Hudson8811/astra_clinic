$(document).ready(function () {
	$('.js-hp-banner__play').click(function () {
		console.log(1);
		$(this).addClass('hp-banner__play--hide');
		$('#hp-banner-picbg').addClass('hp-banner-picbg--hide');
		$('#hp-banner-vidbg').trigger('play');
	});

	function setVideoCenter() {
		var prop = 1.78; //16/9
		var $box = $('#hp-banner');
		var height = $box.height();
		var width = $box.width();
		var new_height = width / prop;
		if (new_height > height) {
			$box.find('video').css({
				width: width,
				height: new_height,
				top: '-' + (new_height / 2 - height / 2) + 'px',
				left: '0',
			});
		} else {
			var new_width = height * prop;
			$box.find('video').css({
				width: new_width,
				height: height,
				top: '0',
				left: '-' + (new_width / 2 - width / 2) + 'px'
			});
		}
	}

	setVideoCenter();
	$(window).resize(setVideoCenter);


	if ($('.history__slider').length > 0) {
		var historySlider = $('.history__slider');

		historySlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			if (i < 10) i = '0' + i;
			var ii = slick.slideCount;
			if (ii < 10) ii = '0' + ii;
			$(this).siblings('.hs-control').find('.hs-control__counter').html('<span>' + i + '</span>' + '/' + ii);
		});
		historySlider.each(function () {
			$(this).slick({
				autoplay: false,
				dots: true,
				arrows: true,
				infinite: false,
				appendArrows: $(this).siblings('.hs-control').find('.hs-control__arrows'),
				prevArrow: $(this).siblings('.hs-control').find('.hs-control__left'),
				nextArrow: $(this).siblings('.hs-control').find('.hs-control__right'),
				appendDots: $(this).siblings('.hs-control').find('.hs-control__dots'),
			});
		});

	}

	if ($('.specials__slider').length > 0) {
		var specialsSlider = $('.specials__slider');

		specialsSlider.slick({
			autoplay: false,
			dots: false,
			arrows: false,
			infinite: false,
			adaptiveHeight: true
		});

		$('.specials__filter').on('click', function () {
			$('.specials__filter').removeClass('active');
			$(this).addClass('active');

			var cat = $(this).data('cat');
			if (cat !== 'all') {
				specialsSlider.slick('slickUnfilter');
				specialsSlider.slick('slickFilter', function (index, elem) {
					return $(elem).find('.specials__slide').attr('data-cat') == cat;
				});
			} else {
				specialsSlider.slick('slickUnfilter');
			}
		});

	}


	if ($('.doctors__slider').length > 0) {
		var doctorsSlider = $('.doctors__slider');

		doctorsSlider.slick({
			autoplay: false,
			dots: true,
			arrows: false,
			infinite: false,
			adaptiveHeight: false,
			slidesToShow: 5,
			slidesToScroll: 5,
			responsive: [{
					breakpoint: 800,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
						dots: false,
						rows: 0
					}
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						dots: false,
						rows: 0
					}
				},
				{
					breakpoint: 520,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						dots: false,
						rows: 0


					}
				}
			]
		});

		$('.doctors__filter').on('click', function () {
			$('.doctors__filter').removeClass('active');
			$(this).addClass('active');
			var slider = $(this).closest('.doctors__container').siblings('.doctors__slider');
			var cat = $(this).attr('data-cat');
			slider.slick('slickUnfilter');
			setTimeout(function () {
				if (cat !== 'all') {
					console.log($('.doctors__item[data-cat="' + cat + '"]').length);
					slider.slick('slickFilter', function () {
						return $('.doctors__item[data-cat="' + cat + '"]', this).length === 1;
					});
				}
				slider.slick('slickGoTo', 0);
			}, 200);

		});
	}

	if ($('.map__title').length > 0) {
		$('.map__title').on('click', function () {
			if ($(this).hasClass('active')) {
				$('.map__content').slideUp('fast');
				$('.map__title').removeClass('active');
			} else {
				$('.map__content').slideUp('fast');
				$('.map__title').removeClass('active');
				$(this).siblings('.map__content').slideDown('fast');
				$(this).addClass('active');
			}
		});
	}
});