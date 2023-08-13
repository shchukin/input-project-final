(function ($) {

    $('.input').on('focus', function () {
        $('.input').removeClass('input--error');
    });

    $('.input--expandable').each(function () {
        $(this).css('height', 'auto');
        $(this).css('height', $(this)[0].scrollHeight + 2 * parseInt($(this).css('border-width'), 10) + 'px');
    }).on('input', function () {
        $(this).css('height', 'auto');
        $(this).css('height', $(this)[0].scrollHeight + 2 * parseInt($(this).css('border-width'), 10) + 'px');
    });

    $('select').on('change',function () {
        if( $(this).val() === 'placeholder' ) {
            $(this).addClass('input--placeholder-is-chosen');
        } else {
            $(this).removeClass('input--placeholder-is-chosen');
        }
    })

})(jQuery);
