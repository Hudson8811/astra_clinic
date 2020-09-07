$(document).ready(function () {
    if ($('.sub-accordion__title').length > 0){
        $('.sub-accordion__title').on('click', function(){
            $(this).toggleClass('active');
            $(this).next().slideToggle('fast');
        });
    }
});
