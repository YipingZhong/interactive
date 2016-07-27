/*------------------------------------*\
    SIMPLE LOGIN FORM
\*------------------------------------*/
var attempt = 3;

function validate(){
	'use strict'
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (md5(username) == "1408816b3b235fed2afd15d69607139d" && md5(password) == "e10adc3949ba59abbe56e057f20f883e"){
		alert ("Login Successful!");
		window.location = "demo.html"; // Redirecting to other page.
		return true;
	}
	else{
		attempt --;// Decrementing by one.
		alert("Wrong username or password! You have "+attempt+" attempt left");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	};
};