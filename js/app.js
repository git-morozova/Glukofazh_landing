// все анимации, запускающиеся в момент начала смены слайда
let changeStart = function (slide) {
	let h1 = slide.querySelector(".title-text-first");
	let h2 = slide.querySelector(".title-text-second");
	let h3 = slide.querySelector(".title-text-third");

	if (h1) {
		/*h1.style.opacity = 0;
		h1.style.transform = "translateY(200px)";*/
		document.querySelector(".tree-image-intern").style.opacity = 0;
	}
	if (h2) {
		document.querySelector(".tree-image-junior").style.opacity = 0;
	}
	if (h3) {

	}
}

// все анимации, запускающиеся в момент завершения смены слайда
let changeEnd = function (activeSlide) {
	let h1 = activeSlide.querySelector(".title-text-first");
	let h2 = activeSlide.querySelector(".title-text-second");
	let h3 = activeSlide.querySelector(".title-text-third");

	if (h1) {
		/*h1.style.opacity = 1;
		h1.style.transition = "all 3s ease";
		h1.style.transform = "translateY(0px)";*/
		document.querySelector(".tree-image-intern").style.opacity = 1;
	}
	if (h2) {
		document.querySelector(".tree-image-junior").style.opacity = 1;
	}
	if (h3) {
		
	}
}



/* конструктор слайдера */

new Swiper('.slider', {
	speed: 1200,
	parallax: true,
	spaceBetween: 18,
	centeredSlides:false,
	loop:false,
	mousewheel: {
		enabled: true,
		sensitivity: 2.4
	},
	
	on: {
		init: function () { 
			// первая загрузка слайдера

			// анимация загов
			/*
			let firstSlideH1 = this.slides[0].querySelector(".title-text-first");			

			if (firstSlideH1) {
				firstSlideH1.style.opacity = 1;
				firstSlideH1.style.transform = "translateY(0px)";
			}
			*/

			// анимация дерева
			let tree = document.querySelector(".tree-image-intern");

			if (tree) {
				tree.style.opacity = 1;
			}
		},
	
		slideChangeTransitionStart: function() {
			this.slides.forEach(slide => {
				changeStart(slide);				
			})
		},
	
		slideChangeTransitionEnd: function() {			
			let activeSlide = this.slides[this.activeIndex];
			changeEnd(activeSlide);				
		},

		scrollbarDragStart: function() {
			this.slides.forEach(slide => {
				changeStart(slide);
			})
		},
		scrollbarDragEnd: function() {
			let activeSlide = this.slides[this.activeIndex];
			changeEnd(activeSlide);
		}
		
	},

	// Optional Parameters
	direction: 'horizontal',

	// Keyboard Controls
	keyboard: {
		enabled: true,
	},
	centeredSlides: true,

	// Navigation Arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		hideOnClick: false,
	},

	// Scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
		// Makes the Scrollbar Draggable
		draggable: true,
		// Snaps slider position to slides when you release Scrollbar
		snapOnRelease: true,
		// Size (Length) of Scrollbar Draggable Element in px
		dragSize: 'auto',

		
	},
});