// JavaScript Document
$(document).ready(function() {//linea a fuerza
	document.addEventListener("deviceready",function(){
		$('#b1').tap(function(){
			navigator.notification.beep(2);
			
		});//tap1
		$('#v1').tap(function(){
			navigator.notification.vibrate(3000);
			
		});//tap2
				
	});//deviceready
});//ready
