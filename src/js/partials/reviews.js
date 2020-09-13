$(document).ready(function () {
    $('.reviews-page__filter').on('click', function () {
        $('.reviews-page__filter').removeClass('active');
        $(this).addClass('active');
        var cat = $(this).data('cat');
        if (cat !== 'all') {
            $('.review__item').addClass('hidden');

			$('.review__item').each(function () {
				if ($(this).attr('data-cat').indexOf(cat) != -1) {
					$(this).removeClass('hidden');
				}
			})
        } else {
            $('.review__item').removeClass('hidden');
        }
    });

    $('.js-load-more-reviews').click(function () {

        var scrollTop = $('html, body').scrollTop();
        $(this).addClass('dreviews__more--hidden').parent().siblings('.js-more-reviews').find('.review__item--hidden').stop(true, true).fadeIn(300);
        $(document).scrollTop(scrollTop);
    });
});