
jQuery.fn.isChecked = function () {
	if ("prop" in jQuery(this)) {
		return jQuery(this).prop('checked') == true ? true : false;

	}
	if ("attr" in jQuery(this)) {
		return jQuery(this).attr('checked') == true ? true : false;
	}
		return jQuery(this).is(":checked") == true ? true : false;
	};
function onclickFunction() {
	var none = true
	var cdnjs = "";
	var cdncss = ""; 
	var cdn = "";
	if (!($('#attribution').isChecked())) {
		cdn = cdn + "&lt;!-- CDN's from codepack (http://jeffreymeng.github.io/codepack) --><br>"
	}
	if ($('#bootstrapcss').isChecked() && !($('#bootstrap').isChecked())) {
		cdncss = cdncss + '&lt;!-- Bootstrap 3 CSS --><br>&ltlink href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet"><br>'
	}           
	if ($('#bootstrapjs').isChecked() && !($('#bootstrap').isChecked())) {
		cdnjs = cdnjs + '&lt;!-- Bootstrap 3 Compiled and minified JS --><br>&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js">&lt;/script><br>'
	}           
	if ($('#bootstraptheme').isChecked() && !($('#bootstrap').isChecked())) {
		cdncss = cdncss + '&lt;!-- Bootstrap 3 Optional theme --><br>&lt;link rel="stylesheet" href="https://maxcdn.botstrapcdn.com/bootstrap/3.3.3/js/bootstrap-theme.min.css"<br>';
	}
	if ($('#jquery').isChecked()) {
		cdnjs = cdnjs + '&lt;!-- jQuery 2.1.4 minified --><br>&lt;script src="https://code.jquery.com/jquery-2.1.4.min.js">&lt;/script><br>';
	}
	if ($('#jquerygoogle').isChecked()) {
		cdnjs = cdnjs + '&lt;!-- jQuery 1.11.3 minified from Google--><br>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">&lt;/script><br>';
	}
	if ($('#jquerymicrosoft').isChecked()) {
		cdnjs = cdnjs + "&lt;!-- jQuery 1.11.3 minified from Microsoft--><br>&lt;script src='http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.4.min.js'>&lt;/script><br>";
	}
	if ($('#jquerycdnjs').isChecked()) {
		cdnjs = cdnjs + "&lt;!-- jQuery 1.11.3 minified from cdn--><br>&lt;script src='https://cdn.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js'>&lt;/script><br>";
	}
	if ($('#jqueryjsdelivr').isChecked()) {
		cdnjs = cdnjs + "&lt;!-- jQuery 1.11.3 minified from jsdelivr--><br>&lt;script src='https://cdn.jsdelivr.net/jquery/2.1.4/jquery.min.js'>&lt;/script><br>";
	}

	if ($('#jquery1').isChecked()) {
		cdnjs = cdnjs + "&lt;!-- jQuery 1.11.3 minified --><br>&lt;script src='https://code.jquery.com/jquery-1.11.3.min.js'>&lt;/script><br>";
	}
	if ($('#jquery1google').isChecked()) {
		cdnjs = cdnjs + '&lt;!-- jQuery 1.11.3 minified from Google--><br>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">&lt;/script><br>';
	}
	if ($('#jquery1microsoft').isChecked()) {
		cdnjs = cdnjs + "&lt;!-- jQuery 1.11.3 minified from Microsoft --><br>&lt;script src='http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js'>&lt;/script><br>";
	}
	if ($('#jquery1cdnjs').isChecked()) {
		cdnjs = cdnjs + "&lt;!-- jQuery 1.11.3 minified from CDNJS--><br>&lt;script src='https://cdn.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js'>&lt;/script><br>";
	}
	if ($('#jquery1jsdelivr').isChecked()) {
		cdnjs = cdnjs + "&lt;!-- jQuery 1.11.3 minified from jsdelivr--><br>&lt;script src='https://cdn.jsdelivr.net/jquery/1.11.3/jquery.min.js'>&lt;/script><br>";
	}
	if ($('#mootoolsgoogle').isChecked()) {
		cdnjs = cdnjs + '&lt;!-- Mootools from Google--><br>&lt;script src="https://ajax.googleapis.com/ajax/libs/mootools/1.5.2/mootools.min.js">&lt;/script><br>';

	}
	if ($('#mootoolscdnjs').isChecked()) {
		cdnjs = cdnjs + '&lt!-- Mootools from cdn --><br>&lt;script src="https://cdn.cloudflare.com/ajax/libs/mootools/1.5.2/mootools-core-compat.min.js">&lt;/script><br>';

	}
	if ($('#mootoolsjsdelivr').isChecked()) {
		cdnjs = cdnjs + '&lt;!-- Mootools from jsdelivr --><br>&lt;script src="https://cdn.jsdelivr.net/mootools/1.5.0/mootools-core-compat.min.js">&lt;/script><br>';

	}
	if ($('#angularjs').isChecked() ) {
		cdnjs = cdnjs + '&lt;!-- AngularJS --><br>&lt;script src="https://code.angularjs.org/1.4.2/angular.min.js">&lt;/script><br>';
	}
	if ($('#angularjsgoogle').isChecked()) {
		
		cdnjs = cdnjs + '&lt;!-- AngularJS from google --><br>&lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js">&lt;/script><br>';
	}
	if ($('#angularjscdnjs').isChecked()) {
		cdnjs = cdnjs + '&lt;!-- AngularJS from CDNJS --><br>&lt;script src="https://cdn.cloudflare.com/ajax/libs/angular.js/1.4.2/angular.min.js">&lt;/script>';
	}
	if ($('#angularjsdeliver').isChecked()) {
		cdnjs = cdnjs + '&lt;!-- AngularJS from jsDelivr --><br>&lt;script src="https://cdn.jsdelivr.net/angularjs/1.4.7/angular.min.js">&lt;/script>';
	}
	if ($('#prototypejsgoogle').isChecked()) {
		cdnjs = cdnjs + '&lt;!-- PrototypeJS from Google --><br>&lt;script src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.2.0/prototype.js">&lt;/script>';
	}	
	if ($('#prototypejscdnjs').isChecked()) {
		cdnjs = cdnjs + '&lt;!-- AngularJS from jsDelivr --><br>&lt;script src="https://cdn.cloudflare.com/ajax/libs/prototype/1.7.2/prototype.min.js">&lt;/script>';
	}	
	if ($('#prototypejsdelivr').isChecked()) {
		cdnjs = cdnjs + '&lt;!-- AngularJS from jsDelivr --><br>&lt;script src="https://cdn.jsdelivr.net/prototypejs/1.7.2/prototype.js">&lt;/script><br>';
	}
	if ($("htmlmeta").isChecked() ) {
		var meta = '<meta charset="utf-8"><meta name="description" content=""><meta name="author" content="">';
	}
	if ($("#html").isChecked()) {
		cdn = "&lt;!DOCTYPE html>" + cdn + "<br>&lt;html><br>&lt;head><br>" + (meta || "") + "<br>" + cdncss + ($("#htmlsort").isChecked() === false ? cdnjs : "") + "&lt;/head><br>&lt;body><br><br><br><br>" + ($("#htmlsort").isChecked() === true ? cdnjs : "") + "<br>&lt;/body>";
	}
	if (cdn === "" || cdn === "&lt;!-- CDN's from codepack (http://jeffreymeng.github.io/codepack) --><br>") {
		cdn = "&lt;!-- You did not select anythng --><br>";
	}
	$("#cdns").empty();
	$("#cdns").append('<pre class="well">' + cdn + "</pre>");

}
jQuery(document).ready(function () {

	$('#get').click(onclickFunction);

});