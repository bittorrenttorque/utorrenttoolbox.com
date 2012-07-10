jQuery(function() {
	window.btapp = new Btapp;
	btapp.connect({
		queries: ['btapp/settings/']
	});

	btapp.on('add:settings', function(settings) {
		function onSetting(value, key) {
			$('body').append('<div class="alert alert-success">' + key + ' : ' + value + '</div>');
		}

		_(settings.toJSON()).each(onSetting);
		settings.on('add', onSetting);
	});
})