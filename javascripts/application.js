(function($)
{

$(function()
{
    var preset_list = $('#list-presets');

    var template = Handlebars.compile($('#tmpl_preset').html());

    var pinned_template = Handlebars.compile($('#tmpl_pinned').html());
    updatePinned = function()
    {
        var pinned = $('#pinned-presets');
        var index = $.jStorage.index();

        var html = '';
        _.each(index, function(key)
        {
            if(key != 'pairing_key')
            {
                html += pinned_template($.jStorage.get(key));
            }
        });

        $('#pinned-container').toggleClass('hidden', html.length <= 0);

        pinned.html(html);
    }

    updatePinned();

    $.ajax({
        dataType: 'jsonp',
        url: 'http://utorrenttoolbox.herokuapp.com/list',
        success: function(data)
        {
            data = { presets: data };
            preset_list.html(template(data));
        }
    });

    $('.js-cancel-save').live('click', function(e)
    {
        e.preventDefault();
        $('#save-preset').slideUp(300, function(){ $(this).addClass('hidden'); $('#save-preset form')[0].reset(); });
    });

    $('.js-pin').live('click', function(e)
    {
        e.preventDefault();

        var parent = $(this).closest('li');

        $.jStorage.set(parent.data('id'), { name: parent.data('name'), config: JSON.stringify(parent.data('config')) });

        updatePinned();
    });
});

})(jQuery);