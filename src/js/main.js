var $ = require( "jquery" );
//IBG  // Also include in SCSS
import ibg from './libs/ibg.js'
import 'slick-carousel'
$(document).ready(function(){
	ibg();
})

//MODAL  // Also include in SCSS
import './libs/modal.js';
import {CloseModal, OpenModal} from './libs/modal.js';

$(document).on("click","[data-click-class-toggler]", function(){
	let group = $(this).closest("[data-click-class-toggle]");
	group.toggleClass($(this).data("click-class-toggler"));
});
$(document).on("click","[data-click-selectable]", function(){
	let group = $(this).closest("[data-click-selectables]");
	let elems = group.find("[data-click-selectable]");
	let cssClass = group.data("click-selectables");
	for(let elem of elems){
		$(elem).removeClass(cssClass);
	}
	$(this).addClass(cssClass);
});


