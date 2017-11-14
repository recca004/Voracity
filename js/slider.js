$(document).ready(function(){






   


 

	
	// $('section.slider img').css({ width:$(window).width() }); 
	
	setInterval(function(){slide();}, 1000);
	

    // ON RESIZE
    $(window).off("resize").on("resize", function(){
        navFixed();
        insertAfter();
    });    

});

var marginLeft = 0;

var slide = function()
{	
	var windowWidth = $(window).width();
	
	marginLeft = marginLeft - windowWidth;
	
	$('section .slider').animate({ marginLeft:marginLeft }, function(){
		console.log(slide)
		$('section .slider:first-child').clone().appendTo($('section .slider img'));
		
		marginLeft = 0;
		
		$('section .slider img').css({ marginLeft:marginLeft });
		
		$('section .slider img:first-child').remove();
		
	});
};


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
		
    }
	
    x[slideIndex-1].style.display = "block"; 
	
	
}


/*
var slideIndex2 = 1;
showshop(slideIndex2);

function plusshop(n) {
    showshop(slideIndex2 += n);
}

function showshop(n) {
   var i;
   var x = document.getElementsByClassName("shopcard");
   if (n > x.length) {slideIndex2 = 1} 
    if (n < 1) {slideIndex2 = x.length} ;
    for (i = 1	; i < x.length; i++) {
        x[i].style.display = "none"; 
		console.log(x)
    }
	
   x[slideIndex2-1].style.display = "block"; 
	
	
}

*/




