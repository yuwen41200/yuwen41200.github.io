$(document).ready(function() {
	"use strict";
	if (window.navigator.userAgent.indexOf("MSIE") > 0) {
		window.alert("Sorry, but your browser is outdated.\n" +
			"You can only view the snapshot of the website\n" +
			"unless you upgrade your browser to the latest version.");
		window.location.replace("http://people.cs.nctu.edu.tw/~ywpu/img/snapshot.png");
	}
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
