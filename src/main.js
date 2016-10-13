$(document).ready(function(){

	console.log($);

	$('.logo-container').click(function () {
		$('.navigation').slideToggle(1500);
		$('.about-me, .school-container, .experience-container, .projects-container, .contact-container').slideUp(1500);
	});

	$('.about-button').click(function () {
		$('.school-container, .experience-container, .projects-container, .contact-container').slideUp(1500);
		$('.about-me').slideToggle(1500);
	});

	$('.school-button').click(function () {
		$('.about-me, .experience-container, .projects-container, .contact-container').slideUp(1500);
		$('.school-container').slideToggle(1500);
	});

	$('.experience-button').click(function () {
		$('.about-me, .school-container, .projects-container, .contact-container').slideUp(1500);
		$('.experience-container').slideToggle(1500);
	});

	$('.projects-button').click(function () {
		$('.about-me, .school-container, .experience-container, .contact-container').slideUp(1500);
		$('.projects-container').slideToggle(2000);
	});

	$('.contact-button').click(function () {
		$('.about-me, .school-container, .experience-container, .projects-container').slideUp(1500);
		$('.contact-container').slideToggle(1500);
	});

});