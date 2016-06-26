$(document).ready(function() {
	"use strict";
	if (window.navigator.userAgent.indexOf("MSIE") > 0) {
		window.alert("Sorry, but your browser is outdated.\n" +
			"You can only view the snapshot of the website\n" +
			"unless you upgrade your browser to the latest version.");
		window.location.replace("http://ywpu.me/img/snapshot.png");
	}
	var backToTop = $("#scroll-top");
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 0)
			backToTop.show("fast");
		else
			backToTop.hide("fast");
	});
	backToTop.on("click", function() {
		$("html, body").animate({ scrollTop: 0 });
	});
});
