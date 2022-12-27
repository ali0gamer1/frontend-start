$(function() {
	var avatar = $('#profile'),
		spinner = $('.grad'),
		icon = $('.icon');
	
	// avatar.hover(
	// 	function() {
	// 		spinner.addClass('spin');
	// 	}, function() {
	// 		spinner.removeClass('spin');
	// 	}
	// );
	
	var toggle = $('button.toggle-br');
	
	toggle.on('click',function() {
		let a = $("[class*='avatar']"),
			b = $(".grad");
		let merge = $.merge(a, b);
		
		if (a.hasClass('border-radius')) {
			merge.removeClass('border-radius');
			icon.addClass('active');
		} else {
			merge.addClass('border-radius');
			icon.removeClass('active');
		}
	});

	
});