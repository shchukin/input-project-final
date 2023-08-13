(function ($) {

    /* Error field */
    $('.input').on('focus', function () {
        $(this).removeClass('input--error');
        $(this).nextUntil(':not(.helper--error)').remove();
    });

    /* Select placeholder */
    function selectPlaceholder($element) {
        if ($element.val() === 'placeholder') {
            $element.addClass('input--placeholder-is-chosen');
        } else {
            $element.removeClass('input--placeholder-is-chosen');
        }
    }

    $('select.input').each(function () {
        selectPlaceholder($(this));
    }).on('change', function () {
        selectPlaceholder($(this));
    });

    /* Expanding textarea */
    function expandTextarea($element) {
        $element.css('height', 'auto');
        $element.css('height', ($element[0].scrollHeight + 2 * parseInt($element.css('border-width'), 10)) + 'px');
    }

    $('.input--expandable').each(function () {
        expandTextarea($(this));
    }).on('input', function () {
        expandTextarea($(this));
    });

})(jQuery);
