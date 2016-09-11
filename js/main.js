function main() {

	$('.about').addClass('article-active')

	// about (home) link
	$('.nav-links li:first-child').click(function(){
		var currentArticle = $('.article-active')
		currentArticle.fadeOut(600).removeClass('article-active')
		$('.about').fadeIn(800).addClass('article-active')
	})	

	// portfolio link 
	$('.nav-links li:nth-child(2)').click(function(){
		var currentArticle = $('.article-active')
		currentArticle.fadeOut(600).removeClass('article-active')
		$('.portfolio').fadeIn(800).addClass('article-active')
	})

	// contact link
	$('.nav-links li:nth-child(3)').click(function(){
		var currentArticle = $('.article-active')
		currentArticle.fadeOut(600).removeClass('article-active')
		$('.contact').fadeIn(800).addClass('article-active')
	})	


}



$(document).ready(main)