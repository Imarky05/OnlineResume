$(document).ready(function(){

	console.log($);

	$('.logo-container').click(function () {
		$('.navigation').slideToggle(1000);
		$('.about-me, .school-container, .experience-container, .projects-container, .contact-container').slideUp(1500);
		$('.plus-sign').removeClass('about-color school-color projects-color experience-color contact-color');
	});

	$('.about-button').click(function () {
		$('.school-container, .experience-container, .projects-container, .contact-container').slideUp(1500);
		$('.about-me').slideToggle(1500);
		$('.plus-sign').removeClass('school-color projects-color experience-color contact-color').addClass('about-color');

	});

	$('.school-button').click(function () {
		$('.about-me, .experience-container, .projects-container, .contact-container').slideUp(1500);
		$('.school-container').slideToggle(1500);
		$('.plus-sign').removeClass('about-color projects-color experience-color contact-color').addClass('school-color');
	});

	$('.experience-button').click(function () {
		$('.about-me, .school-container, .projects-container, .contact-container').slideUp(1500);
		$('.experience-container').slideToggle(1500);
		$('.plus-sign').removeClass('about-color school-color projects-color contact-color').addClass('experience-color');
	});

	$('.projects-button').click(function () {
		$('.about-me, .school-container, .experience-container, .contact-container').slideUp(1500);
		$('.projects-container').slideToggle(2000);
		$('.plus-sign').removeClass('about-color school-color experience-color contact-color').addClass('projects-color');
	});

	$('.contact-button').click(function () {
		$('.about-me, .school-container, .experience-container, .projects-container').slideUp(1500);
		$('.contact-container').slideToggle(1500);
		$('.plus-sign').removeClass('about-color school-color projects-color experience-color').addClass('contact-color');
	});

});