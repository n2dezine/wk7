// JavaScript Document

$(document).ready(function() {
	
	$('section p:last').text('Welcome Chris! Hover Here').addClass('chris');
    
	$('section p:first').css('color', '#03F'); //same as using style attribute
	$('section p:last').addClass('good');
	$('section').hover( handlerIn, handlerOut )
	
	function handlerIn(e)
	{
		$('section').transition({y:'340px'});
	}
	
	function handlerOut(e)
	{
		$('section').transition({y:'0px'});
		$('section').clearQueue();
	}
});