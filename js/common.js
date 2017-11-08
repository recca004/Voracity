$(document).ready(function(){

    // Reverse HTML for responsive
    $("#info").insertAfter("#sidebar");
    function insertAfter(){
        if($(window).width() <= 768){
            $("#info").insertBefore("#sidebar");
        }   else{
            $("#info").insertAfter("#sidebar");
        }  
    }
    insertAfter();


    // ################################################################### NAV FIXED ON MOBILE
    function navFixed(){
        if($(window).width() <= 768){
            $("#menu").addClass("fixed");
        }   else{
            $("#menu").removeClass();
        }    
    }
    navFixed();


    // OPEN MENU ON MOBILE
    $("#menu").off("click").on("click", function(){
        $(this).toggleClass("open");
        $("#menu ul li ul").hide();
    });
    $("#menu > ul > li:not(.important) > a").off("click").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        $("#menu ul li a").not(this).next().hide();
        $(this).next().toggle();
    });    


    // ################################################################### PUBLICATIONS
    $(".publications div:nth-child(1) input").off("change").on("change", function(){
		
		//console.log( $(this).val() );
		var nb = 0;
		
		$( '.publications article').each( function(){
			
			//console.log($(this));
			
			nb += parseInt( $(this).find('input').val() );
			
			
			
		});
		
		//$(this).val()
		
		$("span.msg span").html( nb );
		$("span.msg hiddentype").html( nb );
		
		
    });
    $("span.msg").prepend("<p>Je commande <span>0</span> publications</p>");




    // ################################################################### NEWSLETTER ANCHOR
    $("ul .important a").off("click").on("click", function(){
        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, 800, function(){
            $("footer form").css({transform: "scale(1.5)"}).find("input[type=email]").focus();

            setTimeout(function(){
                $("footer form").css({transform: "scale(1)"})
            }, 200);    
        });        
    });   

	
	 $('section#slider ul li').css({ width:$(window).width() }); 
	
	setInterval(function(){slide();}, 3000);
	

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
	
	$('section#slider ul').animate({ marginLeft:marginLeft }, function(){
		
		$('section#slider ul li:first-child').clone().appendTo($('section#slider ul'));
		
		marginLeft = 0;
		
		$('section#slider ul').css({ marginLeft:marginLeft });
		
		$('section#slider ul li:first-child').remove();
		
	});
};




