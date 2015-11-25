
jQuery.fn.isChecked = function () {
	if ("prop" in jQuery(this)) {
		return jQuery(this).prop('checked') == true ? true : false;

	}
	if ("attr" in jQuery(this)) {
		return jQuery(this).attr('checked') == true ? true : false;
	}
		return jQuery(this).is(":checked") == true ? true : false;
	};

jQuery(document).ready(function () {

	$('#get').click(function () {
	var none = true
	var cdn = ""
	if (!($('#attribution').isChecked())) {
		cdn = cdn + "&lt;!-- CDN's from codepack (http://jeffreymeng.github.io/codepack) --><br>"
	}
	if ($('#bootstrap').isChecked()) {
		cdn = cdn + '&lt;!-- Bootstrap 3 CSS --><br>&ltlink href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" integrity="sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous"><br>&lt;!-- Bootstrap 3 Optional theme --><br>&lt;link rel="stylesheet" href="https://maxcdn.botstrapcdn.com/bootstrap/3.3.3/js/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous"><br>&lt;!-- Bootstrap 3 Compiled and minified JS --><br>&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous">&lt;/script><br>'
	}
	if ($('#bootstrapcss').isChecked() && !($('#bootstrap').isChecked())) {
		cdn = cdn + '&lt;!-- Bootstrap 3 CSS --><br>&ltlink href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" integrity="sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous"><br>'
	}           
	if ($('#bootstrapjs').isChecked() && !($('#bootstrap').isChecked())) {
		cdn = cdn + '&lt;!-- Bootstrap 3 Compiled and minified JS --><br>&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous">&lt;/script><br>'
	}           
	if ($('#bootstraptheme').isChecked() && !($('#bootstrap').isChecked())) {
		cdn = cdn + '&lt;!-- Bootstrap 3 Optional theme --><br>&lt;link rel="stylesheet" href="https://maxcdn.botstrapcdn.com/bootstrap/3.3.3/js/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous"><br>'
	}
	if ($('#jquery').isChecked()) {
		cdn = cdn + '&lt;!-- jQuery 2.1.4 minified --><br>&lt;script src="https://code.jquery.com/jquery-2.1.4.min.js">&lt;/script><br>'
	}
	if ($('#jquerygoogle').isChecked()) {
		cdn = cdn + '&lt;!-- jQuery 1.11.3 minified from Google--><br>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">&lt;/script><br>'
	}
	if ($('#jquerymicrosoft').isChecked()) {
		cdn = cdn + "&lt;!-- jQuery 1.11.3 minified from Microsoft--><br>&lt;script src='http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.4.min.js'>&lt;/script><br>"
	}
	if ($('#jquerycdnjs').isChecked()) {
		cdn = cdn + "&lt;!-- jQuery 1.11.3 minified from cdnjs--><br>&lt;script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js'>&lt;/script><br>"
	}
	if ($('#jqueryjsdelivr').isChecked()) {
		cdn = cdn + "&lt;!-- jQuery 1.11.3 minified from jsdelivr--><br>&lt;script src='https://cdn.jsdelivr.net/jquery/2.1.4/jquery.min.js'>&lt;/script><br>"
	}

	if ($('#jquery1').isChecked()) {
		cdn = cdn + "&lt;!-- jQuery 1.11.3 minified --><br>&lt;script src='https://code.jquery.com/jquery-1.11.3.min.js'>&lt;/script><br>"
	}
	if ($('#jquery1google').isChecked()) {
		cdn = cdn + '&lt;!-- jQuery 1.11.3 minified from Google--><br>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">&lt;/script><br>'
	}
	if ($('#jquery1microsoft').isChecked()) {
		cdn = cdn + "&lt;!-- jQuery 1.11.3 minified from Microsoft --><br>&lt;script src='http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js'>&lt;/script><br>"
	}
	if ($('#jquery1cdnjs').isChecked()) {
		cdn = cdn + "&lt;!-- jQuery 1.11.3 minified from CDNJS--><br>&lt;script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js'>&lt;/script><br>"
	}
	if ($('#jquery1jsdelivr').isChecked()) {
		cdn = cdn + "&lt;!-- jQuery 1.11.3 minified from jsdelivr--><br>&lt;script src='https://cdn.jsdelivr.net/jquery/1.11.3/jquery.min.js'>&lt;/script><br>"
	}
	if ($('#mootoolsgoogle').isChecked()) {
		cdn = cdn + '&lt;!-- Mootools from Google--><br>&lt;script src="https://ajax.googleapis.com/ajax/libs/mootools/1.5.2/mootools.min.js">&lt;/script><br>'

	}
	if ($('#mootoolscdnjs').isChecked()) {
		cdn = cdn + '&lt!-- Mootools from cdnjs --><br>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/mootools/1.5.2/mootools-core-compat.min.js">&lt;/script><br>'

	}
	if ($('#mootoolsjsdelivr').isChecked()) {
		cdn = cdn + '&lt;!-- Mootools from jsdelivr --><br>&lt;script src="https://cdn.jsdelivr.net/mootools/1.5.0/mootools-core-compat.min.js">&lt;/script><br>'

	}
	if ($('#angularjs').isChecked()) {
		cdn = cdn + '&lt;!-- AngularJS --><br>&lt;script src="https://code.angularjs.org/1.4.2/angular.min.js">&lt;/script><br>'
	}
	if ($('#angularjsgoogle').isChecked()) {
		cdn = cdn + '&lt;!-- AngularJS from google --><br>&lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js">&lt;/script><br>'
	}
	if ($('#angularjscdnjs').isChecked()) {
		cdn = cdn + '&lt;!-- AngularJS from CDNJS --><br>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.2/angular.min.js">&lt;/script>'
	}
	if ($('#angularjsdeliver').isChecked()) {
		cdn = cdn + '&lt;!-- AngularJS from jsDelivr --><br>&lt;script src="https://cdn.jsdelivr.net/angularjs/1.4.7/angular.min.js">&lt;/script>'
	}
	if ($('#prototypejsgoogle').isChecked()) {
		cdn = cdn + '&lt;!-- PrototypeJS from Google --><br>&lt;script src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.2.0/prototype.js">&lt;/script>'
	}	
	if ($('#prototypejscdnjs').isChecked()) {
		cdn = cdn + '&lt;!-- AngularJS from jsDelivr --><br>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/prototype/1.7.2/prototype.min.js">&lt;/script>'
	}	
	if ($('#prototypejsdelivr').isChecked()) {
		cdn = cdn + '&lt;!-- AngularJS from jsDelivr --><br>&lt;script src="https://cdn.jsdelivr.net/prototypejs/1.7.2/prototype.js">&lt;/script><br>'
	}	

	if (cdn === "" || cdn === "&lt;!-- CDN's from codepack (http://jeffreymeng.github.io/codepack) --><br>") {
		cdn = "&lt;!-- You did not select anythng --><br>"
	}

	$("#cdns").empty();
	$("#cdns").append('<pre class="well">' + cdn + "</pre>");

	});
	});