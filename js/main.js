$(document).ready(function(){

// Fixed menu
// if ($( window ).width() > 913) {
// 	let menuOffset = $('nav').offset().top;
// 	$('nav').wrap('<div class="menu_placeholder"></div>');
// 	$('.menu_placeholder').height($('nav').outerHeight());

// 	$(window).scroll(function() {
// 		let scrollPos = $(window).scrollTop();

// 		if (scrollPos >= menuOffset) {
// 			$('nav').addClass("f_nav");
// 		} else {
// 			$('nav').removeClass("f_nav");
// 		}
// 		console.log(menuOffset);
// 	});
// }

//  Menu toggle btn

$(".nav_btn").click(function() {
	$(".sandwich").toggleClass("active");
	$('nav').toggleClass("active_nav");
	if ($("nav").is(":visible")) {
		$(".name").removeClass("h_opacity");
		$("nav").fadeOut(600);
	} else {
		$(".name").addClass("h_opacity");
		$("nav").fadeIn(600); 
	};
});

$(".menu a").click(function() {
		$(".sandwich").toggleClass("active");
		$("nav").fadeOut(600);
		$(".name").removeClass("h_opacity");
	});



// Scroll to sections
$(".menu li a").mPageScroll2id();

// Quotes slider (owl carousel)
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items:1,
		smartSpeed: 1000,
	});
});


// Portfolio background images
$.each($('.portfolio_item'), function(index, value) {
	$(this).css('backgroundImage', 'url("img/bg_' + (index + 1) + '.jpg")');
});


// Portfolio filter
let cat = $('.toolbar .cat');

cat.on('click', function(e) {
	cat.each(function(i) {
		cat[i].classList.remove("cat_active");
	});
	e.target.classList.add("cat_active");
});

$(function() {
	let selectedClass = "";
	$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
		$("#portfolio_grid").fadeTo(100, 0.1);
		$("#portfolio_grid .portfolio_item").not("."+selectedClass).fadeOut().removeClass('scale');
		setTimeout(function() {
			$("."+selectedClass).fadeIn().addClass('scale');
			$("#portfolio_grid").fadeTo(300, 1);
		}, 300); 
		
	});
});

let portfolioItem = $('.portfolio_item');

portfolioItem.on('mouseover', function(e) {
	$(this).find(".description").fadeIn();
});
portfolioItem.on('mouseleave', function(e) {
	portfolioItem.each(function(i) {
		$('.portfolio_item .description').fadeOut();
	});

});

//  Portfolio popup

$('.popup_link').magnificPopup({
	type: 'inline',
	midClick: true, 
	showCloseBtn: true,
});



// function showMenu() {
// 	if (($('.mfp-content').length) === 0 ) {
// 		$('nav').css('display', 'block');
// 	} else {
// 		$('nav').css('display', 'none');
// 	}
// }

// setInterval(showMenu, 50);


$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

});


