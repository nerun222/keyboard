'use strict';

function cat(gain) {
	document.getElementById("text").innerHTML = document.getElementById('text').innerHTML + gain;
}

function ca() {
	var g = document.getElementById('text').innerHTML;
	var x = document.getElementById("text").innerHTML.length;
	document.getElementById('text').innerHTML = g.substring(0, x - 1);
}
function sb(gain) {
	document.getElementById("text").innerHTML = document.getElementById('text').innerHTML + ' ';
}
function cc() {
	document.getElementById("text").innerHTML = ' ';
}
