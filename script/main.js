jQuery(function($) {
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 0)
			$("#scroll-top").show("fast");
		else
			$("#scroll-top").hide("fast");
	});
	$("#scroll-top").on("click", function() {
		$("html, body").animate({ scrollTop: 0 });
	});
});
