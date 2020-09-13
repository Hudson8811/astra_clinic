$(document).ready(function () {
	$('.history-page__filter').on('click', function () {
		$('.history-page__filter').removeClass('active');
		$(this).addClass('active');
		var cat = $(this).data('cat');
		if (cat !== 'all') {
			$('.history__item').addClass('hidden');

			$('.history__item').each(function () {
				if ($(this).attr('data-cat').indexOf(cat) != -1) {
					$(this).removeClass('hidden');
				}
			})

		} else {
			$('.history__item').removeClass('hidden');
		}
	});
});