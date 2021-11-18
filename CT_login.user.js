// ==UserScript==
// @name        CT_login
// @namespace   https://github.com/bluecombats/CentralTickets/CT_login.user.js
// @description turn on automcomplete for email and password
// @include     https://centraltickets.co.uk/
// @include     *centraltickets.co.uk/*
// @version     1.2021.11.18.0954
// @grant       none
// @run-at 	document-end
// @copyright   2015, cameroncondry
// ==/UserScript==

function CT_login(){
	var CT_loginInterval = setInterval(function(){
		InsertLogin();
	}, 1000);
}

function InsertLogin(){
  input = document.getElementsByTagName("input");
  if(document.getElementById("email_addr")[0]){
    var email = document.getElementById("email_addr")[0];
    //console.log(email);
    //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password
    email.setAttribute("automComplete","on");
  }
  for(i=0;i<=input.length;i++){
    //console.log(i);
    //console.log(input[i]);
    if(input[i].type == "password"){
      input[i].setAttribute("automComplete","on");
      break;
    }
  }
}
//Main script starts here
initCT_login();
