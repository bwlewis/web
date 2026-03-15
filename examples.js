function showStator() {
  translate(stator,10);
  translate(slider,2000);
  translate(cursor,2000);
}
function showCursor() {
  translate(slider,2000);
  translate(cursor,400);
  translate(stator,2000);
}

function showSlider() {
  translate(slider,10);
  translate(cursor,2000);
  translate(stator,2000);
}

function modDiv(url) {
	var j;
	var div = document.getElementById("examples");
	while(div.hasChildNodes())
	div.removeChild(div.childNodes[0]);
	var parser = new DOMParser();
	var doc = parser.parseFromString('<div xmlns="http://www.w3.org/1999/xhtml">' + getText(url) + '<\/div>', 'application/xhtml+xml');
	var root = doc.documentElement;
	for (j=0; j<root.childNodes.length; j++)
		div.appendChild(document.importNode(root.childNodes[j], true));
}
function getText(xmlUrl) {
	var s="";
	if (xmlUrl!=null) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", xmlUrl, false);
		xmlHttp.send(null);
		s=xmlHttp.responseText;
	}
	return s;
}

function slreset() {
	translate(stator,10);
	var x=lookupX(1,slength);
	translate(slider,x);
	var x=lookupX(Math.sqrt(10),slength);
	translate(cursor,x-50);
}
function ex1() {
	var x=lookupX(2,slength);
	animateTo(slider,x,"ex12()");
}
function ex12() {
	var x=lookupX(6,1000);
	animateTo(cursor,(x-50),"noop()");
}
function ex2() {
	var x=lookupX(4.1,1000)-1000;
	animateTo(slider, x, "ex22()");
}
function ex22() {
	var x=lookupX(3.608,1000);
	animateTo(cursor, x-50, "noop()");
}
function ex21() {
	var x=lookupX(4.1,1000);
	animateTo(slider,x,"noop()");
}
function ex3() {
	var x=lookupX(1.5,1000);
	animateTo(slider,x,"ex31()");
}
function ex31() {
	var x=lookupX(2.12132034,1000);
	animateTo(cursor,x-50,"ex32()");
}
function ex32() {
	var x=lookupX(2.12132034,1000);
	animateTo(slider,x,"ex33()");
}
function ex33() {
	var x=lookupX(7.00035713,1000);
	animateTo(cursor,x-50,"noop()");
}
