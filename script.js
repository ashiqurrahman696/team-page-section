$(document).ready(function () {
    var width = $(window).width();
    var line = 1;
    var column = 1;
    if (width > 1199) {
        $('.member').each(function (index) {
            if (column == 5) {
                line++;
                column = 1;
            }
            $(this).attr({
                'data-line': line,
                'data-column': column
            });
            $(this).find('.lnk-member').attr({
                'data-line': line,
                'data-column': column
            });
            column++;
        });
    }
    else if (width > 991) {
        $('.member').each(function (index) {
            if (column == 4) {
                line++;
                column = 1;
            }
            $(this).attr({
                'data-line': line,
                'data-column': column
            });
            $(this).find('.lnk-member').attr({
                'data-line': line,
                'data-column': column
            });
            column++;
        });
    }
    else if (width > 575) {
        $('.member').each(function (index) {
            if (column == 3) {
                line++;
                column = 1;
            }
            $(this).attr({
                'data-line': line,
                'data-column': column
            });
            $(this).find('.lnk-member').attr({
                'data-line': line,
                'data-column': column
            });
            column++;
        });
    }
    else {
        $('.member').each(function (index) {
            if (column == 2) {
                line++;
                column = 1;
            }
            $(this).attr('data-line', line);
            $(this).attr('data-column', column);
            $(this).find('.lnk-member').attr('data-line', line);
            $(this).find('.lnk-member').attr('data-column', column);
            column++;
        });
    }
    $('.member').on('click', function (event) {
        event.preventDefault();
        if (!$(this).find('span').hasClass('lnk-active')) {
            if ($('.members .member-details').length > 0) {
                $('.members .member-details').slideUp('slow', function () {
                    $(this).remove();
                });
            }
            $('.members .clearfix').remove();
            $('.member span').removeClass('lnk-active').addClass('lnk-member');
            $(this).find('.lnk-member').addClass('lnk-active');
            $(this).find('.lnk-member').removeClass('lnk-member');
            var width = $(document).width();
            var line = $(this).attr('data-line');
            var column = $(this).attr('data-column');
            $('.member').removeClass('active');
            $('.member[data-line="' + line + '"][data-column="' + column + '"]').addClass('active');
            var html = '<div class="col-lg-12 col-xs-12 member-details member-' + line + '-' + column + '">' +
                '<div class="interno">' +
                '<div class="nome">' +
                $('.member[data-line="' + line + '"][data-column="' + column + '"] .member-data .nome').html() +
                '</div>' +
                '<div class="area">' +
                $('.member[data-line="' + line + '"][data-column="' + column + '"] .member-data .area').html() +
                '</div>' +
                '<div class="conteudo">' +
                $('.member[data-line="' + line + '"][data-column="' + column + '"] .member-content').html() +
                '</div>' +
                '</div>' +
                '</div>';
            if (width > 1199) {
                if ($('.member[data-line="' + line + '"][data-column="4"]').length > 0) {
                    $('.member[data-line="' + line + '"][data-column="4"]').after(html);
                } else {
                    if ($('.member[data-line="' + line + '"][data-column="3"]').length > 0) {
                        $('.member[data-line="' + line + '"][data-column="3"]').after(html);
                    } else {
                        if ($('.member[data-line="' + line + '"][data-column="2"]').length > 0) {
                            $('.member[data-line="' + line + '"][data-column="2"]').after(html);
                        } else {
                            $('.member[data-line="' + line + '"][data-column="1"]').after(html);
                        }
                    }
                }
            }
            else if (width > 991) {
                if ($('.member[data-line="' + line + '"][data-column="3"]').length > 0) {
                    $('.member[data-line="' + line + '"][data-column="3"]').after(html);
                } else {
                    if ($('.member[data-line="' + line + '"][data-column="2"]').length > 0) {
                        $('.member[data-line="' + line + '"][data-column="2"]').after(html);
                    } else {
                        $('.member[data-line="' + line + '"][data-column="1"]').after(html);
                    }
                }
            }
            else if (width > 575) {
                if ($('.member[data-line="' + line + '"][data-column="2"]').length > 0) {
                    $('.member[data-line="' + line + '"][data-column="2"]').after(html);
                } else {
                    $('.member[data-line="' + line + '"][data-column="1"]').after(html);
                }
            }
            else {
                $('.member[data-line="' + line + '"][data-column="1"]').after(html);
            }
            $('.members .member-details').slideDown('slow');
        } else {
            $('.member').removeClass('active');
            $('.members .member-details').slideUp('slow', function () {
                $(this).remove();
            });
            $('.members .clearfix').remove();
            $(this).find('.lnk-active').addClass('lnk-member');
            $(this).find('.lnk-active').removeClass('lnk-active');
        }
    });
});
