$(document).ready(function () {
    $('.reviews-page__filter').on('click', function(){
        $('.reviews-page__filter').removeClass('active');
        $(this).addClass('active');
        var cat = $(this).data('cat');
        if(cat !== 'all'){
            $('.review__item').addClass('hidden');
            $('.review__item[data-cat="'+cat+'"]').removeClass('hidden');
        } else{
            $('.review__item').removeClass('hidden');
        }
    });
});
