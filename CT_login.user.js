// ==UserScript==
// @name        CT_login
// @namespace   https://github.com/bluecombats/CentralTickets/CT_login.user.js
// @description turn on automcomplete for email and password
// @include     https://centraltickets.co.uk/
// @include     *centraltickets.co.uk/*
// @version     1.2021.11.18.1010
// @grant       none
// @run-at 	document-end
// @copyright   2015, cameroncondry
// ==/UserScript==

function initCT_login(){
	var CT_loginInterval = setInterval(function(){
		InsertLogin();
	}, 1000);
}

function InsertLogin(){
	if(document.getElementsByTagName("input")){
		input = document.getElementsByTagName("input");
    		for(i=0;i<=input.length;i++){
       			//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password
       			console.log(i);
       			console.log(input[i]);
       			if(input[i].type == "password"){
         			console.log("password");
         			input[i].setAttribute("automComplete","on");
       			}
       			if(input[i].id == "email_addr"){
         			console.log("email");
         			input[i].setAttribute("automComplete","on");
       			}
    		}
  	}
}
//Main script starts here
initCT_login();
