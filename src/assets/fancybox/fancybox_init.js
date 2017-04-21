$(document).ready(function(e) {
	$('a.fancybox').fancybox({
		'openSpeed': 400, 
		'closeSpeed': 400,
		'overlayOpacity': 0.6,
		'titleShow': false,
		'cyclic': true,
		'nextSpeed' : 400,
		'prevSpeed': 400,
		'padding': 20,
		'minWidth': 10,
		'minHeight': 10,
		helpers:  {
			title:  null,
			overlay: {
				locked: false
			}
		}
	});

  $("a.open-contact-form").fancybox({
		maxWidth	: 800,
		maxHeight	: 650,
		fitToView	: true,
		//width		: '75%',
		//height		: '75%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
    beforeClose	: function() {
        $("#ContactForm").hide();
    },
		helpers:  {
			overlay: {
				locked: false
			}
		}
	});

  $("a.open-brochure-form").fancybox({
		maxWidth	: 800,
		maxHeight	: 650,
		fitToView	: true,
		//width		: '75%',
		//height		: '75%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
    beforeClose	: function() {
        $("#BrochureForm").hide();
    },
		helpers:  {
			overlay: {
				locked: false
			}
		}
	});

});