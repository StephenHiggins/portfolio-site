function main() {

	$('.about').addClass('article-active')
	$('.nav-links li:first-child').addClass('active')

	// about (home) link
	$('.nav-links li:first-child').click(function(){
		var currentArticle = $('.article-active')
		var currentLink = $('.active')
		currentArticle.fadeOut(100).removeClass('article-active')
		currentLink.removeClass('active')
		$('.about').fadeIn(600).addClass('article-active')
		$('.nav-links li:first-child').addClass('active')
	})	

	// portfolio link 
	$('.nav-links li:nth-child(2)').click(function(){
		var currentArticle = $('.article-active')
		var currentLink = $('.active')
		currentArticle.fadeOut(100).removeClass('article-active')
		currentLink.removeClass('active')
		$('.portfolio').fadeIn(600).addClass('article-active')
		$('.nav-links li:nth-child(2)').addClass('active')
	})

	// contact link
	$('.nav-links li:nth-child(3)').click(function(){
		var currentArticle = $('.article-active')
		var currentLink = $('.active')
		currentArticle.fadeOut(100).removeClass('article-active')
		currentLink.removeClass('active')
		$('.contact').fadeIn(600).addClass('article-active')
		$('.nav-links li:nth-child(3)').addClass('active')
	})	


}



$(document).ready(main)