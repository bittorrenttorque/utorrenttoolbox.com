(function($)
{

$(function()
{
    var preset_list = $('#list-presets');
    var template = Handlebars.compile($('#tmpl_preset').html());
    console.log('hey');
    $.ajax({
        dataType: 'jsonp',
        url: 'http://10.10.200.121:3000/list',
        success: function(data)
        {
            data = { presets: data };
            console.log(data);
            preset_list.html(template(data));
        }
    });
});

})(jQuery);