$(document).ready(function () {
    if ($('.accordion__title').length > 0){
        $('.accordion__title').on('click', function(){
            $(this).toggleClass('active');
            $(this).next().slideToggle('fast');
        });
    }
});
