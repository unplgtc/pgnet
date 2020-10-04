$(document).ready(function(){
	jQuery.preloadimages = function() {
		for(var i = 0; i<arguments.length; i++) {
			jQuery("<img>").attr("src", arguments[i]);
		}
	}
	
	$.preloadimages("images/nav-meet-the-writer-over.jpg", "images/nav-published-works-over.jpg", "images/nav-television-film-over.jpg", "images/nav-qa-over.jpg", "images/nav-writers-desk-over.jpg", "images/nav-newsletters-over.jpg", "images/nav-contact-over.jpg", "images/stwitter-over.jpg", "images/semail-over.jpg");


    $(".hoverswap").hover(
        function () {
            $(this).attr("src", $(this).attr("src").replace(".jpg", "-over.jpg"));
        },
        function () {
            $(this).attr("src", $(this).attr("src").replace("-over.jpg", ".jpg"));
        }
    );


});