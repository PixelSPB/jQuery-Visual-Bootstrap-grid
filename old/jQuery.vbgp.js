/*	Visual Bootstrap grid by PixelSPB, v. 1.0 © 2018, All rights reserved 

	HotKeys:
	
	[ CTRL ]+[ ; ]	show/hide grid
	
	[ CTRL ]+[ ' ]	show/hide column padding
	
	[ CTRL ]+[ [ ]	grayscale/color grid
	
	[ CTRL ]+[ ] ]	show/hide column numbers

*/

jQuery(document).ready(function($) {
	
	/* Script settings */
	
	var numCols = 12; // Number of columns
	var bootstrapVersion = 4; // Bootstrap version
	
	/* End script settings */
	
	$('head').append('<style>.showHideVisualGrid{display:none; font-family: Geneva, Arial, Helvetica, sans-serif; font-size:16px; color:#000; font-weight:bold;}\n.pixelGridShowHide input[type="checkbox"] {margin: 0; width: auto !important; height: auto !important; margin-right: 10px !important;}\n.pixelVisualGrid{top:0; bottom:0; left:0; right:0; z-index:9997; display:none; position:fixed;}\n.pixelVisualGrid.showVisualGrid{display:block;}\n.v100{height: 100vh;}\n.pixelVisualGrid .visualGridContentZone{background:#ffb600; text-align: center; padding-top:20px;}\n.pixelVisualGrid .colWhiteSpace{background:#ffe875; opacity:0.3;}\n.pixelVisualGrid.grayscale .colWhiteSpace{background:#ebebeb;}\n.pixelVisualGrid .colWhiteSpace.transparentWhiteSpace{background:transparent;}\n.pixelGridColNumHide{display:none;}\n.pixelVisualGrid.grayscale .visualGridContentZone{background:#bfbfbf}\n.showHideVisualGrid{position:fixed;	top:0; right:0; z-index:9998; padding:20px; background:#fff; border-radius: 0 0 0 10px;}\n.pixelGridShow{width:15px; height:15px; position:fixed; z-index:9999; top:0; right:0;}\n.showHideVisualGrid.pixelVisualGridVisible{display:block;}</style>')
	$('body').prepend('<div class="position-fixed pixelVisualGrid"></div>');
	$('body').prepend('<div class="pixelGridShow"></div>');
	$('.pixelVisualGrid').append('<div class="container v100"></div>');
	$('.pixelVisualGrid .container.v100').append('<div class="row txtCenter position-relative v100"></div>');
	$('body').append('<div class="showHideVisualGrid"></div>');
	$('.showHideVisualGrid').append('<div class="pixelGridShowHide"></div>');
	$('.pixelGridShowHide').append('<div><input type="checkbox" id="showPixelGrid"/><label for="showPixelGrid">Grid</label></div>');
	$('.pixelGridShowHide').append('<div><input type="checkbox" id="showPixelGridPaddings"/><label for="showPixelGridPaddings">Padding fill</label></div>');
	$('.pixelGridShowHide').append('<div><input type="checkbox" id="showPixelGridColNum"/><label for="showPixelGridColNum">Column numbers</label></div>');
	$('.pixelGridShowHide').append('<div><input type="checkbox" id="showPixelGridGrayScale"/><label for="showPixelGridGrayScale">Grayscale</label></div>');
	
	if (bootstrapVersion == 3){
		colXS = 'col-xs-1';
		colXL = 'col-lg-1';
	} else {
		colXS = 'col-1';
		colXL = 'col-lg-1 col-xl-1';
	}
	for (i = 0; i < numCols; i++) {
		currentCol = i+1;
		$('.pixelVisualGrid .container.v100 .row').append('<div class="'+colXS+' col-sm-1 col-md-1 '+colXL+' colWhiteSpace transparentWhiteSpace">\n<div class="visualGridContentZone v100">\n<span class="pixelGridColNumHide">'+currentCol+'</span>\n</div>\n</div>');
	}
	
	$('input').on('click', function(){
		clickedCheckboxVisualGrid($(this).attr('id'), false);
	});
	$('.pixelGridShow').on('mouseover', function(){
		$('.showHideVisualGrid').addClass('pixelVisualGridVisible');
	});
	$('.showHideVisualGrid').on('mouseleave', function(){
		$('.showHideVisualGrid').removeClass('pixelVisualGridVisible');
	});
	
	function clickedCheckboxVisualGrid(idCheckboxVisualGrid, keyPressStatus){
		
		if (keyPressStatus == true){
			if ($('#'+idCheckboxVisualGrid).is(':checked')){
				$('#'+idCheckboxVisualGrid).prop('checked', false);
			} else {
				$('#'+idCheckboxVisualGrid).prop('checked', true);
			}
		}
		
		if (idCheckboxVisualGrid == 'showPixelGrid'){
			if ($('#'+idCheckboxVisualGrid).is(':checked')){
				$('.pixelVisualGrid').addClass('showVisualGrid');
			} else {
				$('.pixelVisualGrid').removeClass('showVisualGrid');
			}
		}

		if (idCheckboxVisualGrid == 'showPixelGridPaddings'){
			if ($('#'+idCheckboxVisualGrid).is(':checked')){
				$('.colWhiteSpace').removeClass('transparentWhiteSpace');
			} else {
				$('.colWhiteSpace').addClass('transparentWhiteSpace');
			}
		}
		
		if (idCheckboxVisualGrid == 'showPixelGridColNum'){
			if ($('#'+idCheckboxVisualGrid).is(':checked')){
				$('.visualGridContentZone span').removeClass('pixelGridColNumHide');
			} else {
				$('.visualGridContentZone span').addClass('pixelGridColNumHide');
			}
		}
		
		if (idCheckboxVisualGrid == 'showPixelGridGrayScale'){
			if ($('#'+idCheckboxVisualGrid).is(':checked')){
				$('.pixelVisualGrid').addClass('grayscale');
			} else {
				$('.pixelVisualGrid').removeClass('grayscale');
			}
		}
	}
	$(document).keydown(function (e) {
		if (event.ctrlKey && e.which == 186 ) {
			clickedCheckboxVisualGrid('showPixelGrid', true);
			return false;
		}
		if (event.ctrlKey && e.which == 222 ) {
			clickedCheckboxVisualGrid('showPixelGridPaddings', true);
			return false;
		}
		if (event.ctrlKey && e.which == 219 ) {
			clickedCheckboxVisualGrid('showPixelGridGrayScale', true);
			return false;
		}
		if (event.ctrlKey && e.which == 221 ) {
			clickedCheckboxVisualGrid('showPixelGridColNum', true);
			return false;
		}
	});
});
