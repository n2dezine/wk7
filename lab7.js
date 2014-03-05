// JavaScript Document

$(document).ready(function() {
	
	$('section p:last').text('Welcome Chris! Hover Here').addClass('chris').addClass('chirs:hover');
    
	$('section p:first').css('color', '#03F'); //same as using style attribute
	$('section p:last').addClass('good');
	$('section').hover( handlerIn, handlerOut )
	
	function handlerIn(e)
	{
		$('section').transition({y:'300px'});
	}
	
	function handlerOut(e)
	{
		$('section').transition({y:'0px'});
		$('section').clearQueue();
	}
});