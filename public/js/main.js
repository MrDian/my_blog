$('#get_register').on('click', function (e) {
	e.preventDefault();
	$.ajax({
		dataType: 'json',
		url: '/api/get_safari_account',
		success: function (data) {
			console.log(data);
		}
	});	
});