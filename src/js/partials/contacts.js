$(document).ready(function () {
    if ($('.accordion__title').length > 0){
        $('.accordion__title').on('click', function(){
            if ($(this).hasClass('active')){
                $('.accordion__content').slideUp('fast');
                $('.accordion__title').removeClass('active');
            } else {
                $('.accordion__content').slideUp('fast');
                $('.accordion__title').removeClass('active');
                $(this).siblings('.accordion__content').slideDown('fast');
                $(this).addClass('active');
            }
        });
    }
});
