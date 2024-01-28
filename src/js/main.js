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
$(document).ready(function(){
	$(".image-slider-modal").slick({
		dots:false,
		slidesToShow: 1,
		slidesToScroll: 1,

		arrows: true,
		adaptiveHeight: true,
        prevArrow:`<div class='z-10 cursor-pointer absolute left-0.5 h-full m-auto flex justify-center items-center'>
	        <div class="bg-black/50 rounded-full w-8 h-8 flex justify-center items-center text-white text-xl">
	        	<i class='fa-solid fa-angle-left'></i>

	        </div>
        </div>`,
        nextArrow:`<div class='z-10 cursor-pointer absolute right-0.5 h-full m-auto flex justify-center items-center'>
	        <div class="bg-black/50 rounded-full w-8 h-8 flex justify-center items-center text-white text-xl">
	        	<i class='fa-solid fa-angle-right'></i>

	        </div>
        </div>`,
	});
	$(".image-preview-slider").each(function(){
		let main = $(this).find(".image-preview-slider-main")[0];
		let nav = $(this).find(".image-preview-slider-nav")[0];
		$(main).slick({
			dots:false,
			arrows:false,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: nav,

		});
		$(nav).slick({
			dots:false,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
	        prevArrow:`<div class='z-10 cursor-pointer absolute left-0.5 h-full m-auto flex justify-center items-center'>
		        <div class="bg-black/50 rounded-full w-5 h-5 flex justify-center items-center text-white text-base">
		        	<i class='fa-solid fa-angle-left'></i>

		        </div>
	        </div>`,
	        nextArrow:`<div class='z-10 cursor-pointer absolute right-0.5 h-full m-auto flex justify-center items-center'>
		        <div class="bg-black/50 rounded-full w-5 h-5 flex justify-center items-center text-white text-base">
		        	<i class='fa-solid fa-angle-right'></i>

		        </div>
	        </div>`,
	        
			asNavFor: main,
		});
	});
	
});

