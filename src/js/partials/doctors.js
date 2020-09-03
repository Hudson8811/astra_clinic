$(document).ready(function () {
    $('.doctors-page__filter').on('click', function(){
        $('.doctors-page__filter').removeClass('active');
        $(this).addClass('active');
        var cat = $(this).data('cat');
        if(cat !== 'all'){
            $('.doctors-page__block').addClass('hidden');
            $('.doctors-page__block[data-cat="'+cat+'"]').removeClass('hidden');
        } else{
            $('.doctors-page__block').removeClass('hidden');
        }
    });

    $('.serts-page__filter').on('click', function(){
        $('.serts-page__filter').removeClass('active');
        $(this).addClass('active');
        var cat = $(this).data('cat');
        if(cat !== 'all'){
            $('.serts-page__block').addClass('hidden');
            $('.serts-page__block[data-cat="'+cat+'"]').removeClass('hidden');
        } else{
            $('.serts-page__block').removeClass('hidden');
        }
    });
});
