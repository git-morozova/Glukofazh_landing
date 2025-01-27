// все анимации, запускающиеся в момент начала смены слайда
let changeStart = function (slide) {

	const swiper = document.querySelector('.swiper').swiper;
	const bar = document.querySelector(".swiper-scrollbar-drag"); 


	if(swiper.activeIndex == 0){
		bar.style.transform = "translate3d(0px, 0px, 0px)"
	}
	if(swiper.activeIndex == 1){
		bar.style.transform = "translate3d(200px, 0px, 0px)"
	}
	if(swiper.activeIndex == 2){
		bar.style.transform = "translate3d(400px, 0px, 0px)"
	}

	fadeCurrentSlide(slide);
}

// все анимации, запускающиеся в момент завершения смены слайда
let changeEnd = function (activeSlide) {	
	showNewSlide(activeSlide);
}

//анимации исчезновения контента
let fadeCurrentSlide = function (slide) {
	let h1 = slide.querySelector(".title-text").textContent;

	if (h1 == "slide0") {
		document.querySelector(".tree-image-intern").style.opacity = 0;
	}
	if (h1 == "slide1") {
		document.querySelector(".tree-image-junior").style.opacity = 0;
	}
}

//анимации появления контента
let showNewSlide = function (activeSlide) {
	let h1 = activeSlide.querySelector(".title-text").textContent;

	if (h1 == "slide0") {
		document.querySelector(".tree-image-intern").style.opacity = 1;
	}
	if (h1 == "slide1") {
		document.querySelector(".tree-image-junior").style.opacity = 1;
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
	simulateTouch:true,
	hashNavigation: true,
	on: {
		init: function () { 
			// первая загрузка слайдера

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

		/*scrollbarDragMove*/

		scrollbarDragStart: function() {
			this.slides.forEach(slide => {
				fadeCurrentSlide(slide);		
			})
		},

		scrollbarDragEnd: function() {
			/*исправляем положение ползунка по ключевым кадрам при перетаскивании мышкой*/
			dropPosition = document.querySelector(".swiper-scrollbar-drag").style.transform;			
			dropPositionX = Number(dropPosition.substring(12, dropPosition.indexOf("px"))); //вытаскиваем положение ползунка по Х при дропе

			const bar = document.querySelector(".swiper-scrollbar-drag"); 
			let newCurrentSlider = document.querySelector('.swiper').swiper;
			

			if (dropPositionX < 100) {
				newCurrentSlider.activeIndex = 0
				bar.style.transform = "translate3d(0px, 0px, 0px)"
			} else if (dropPositionX < 300 && dropPositionX >= 100) {
				newCurrentSlider.activeIndex = 1
				bar.style.transform = "translate3d(200px, 0px, 0px)"
			} else if (dropPositionX < 500 && dropPositionX >= 300) {
				newCurrentSlider.activeIndex = 2
				bar.style.transform = "translate3d(400px, 0px, 0px)"
			} else {
				newCurrentSlider.activeIndex = 2
				bar.style.transform = "translate3d(1400px, 0px, 0px)"
			} 

			let activeSlide = this.slides[this.activeIndex];
			showNewSlide(activeSlide);	

		}
		
	},

	direction: 'horizontal',
	keyboard: {
		enabled: true,
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		// Makes the Scrollbar Draggable
		draggable: true,
		// Snaps slider position to slides when you release Scrollbar
		snapOnRelease: true,
		// Size (Length) of Scrollbar Draggable Element in px
		dragSize: 'auto',
	  },

	  	// Navigation Arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		hideOnClick: false,
	},
	centeredSlides: true,
	
});




/*
const bar1 = document.querySelector(".swiper-scrollbar-drag"); 


bar1.addEventListener("mousedown", onMouse);
bar1.addEventListener("mouseup", onMouse);

function onMouse(event) {
	event.preventDefault();
    console.log(event.type + ", " + event.target);
}


*/












/*стрелки навигации*/
/*
const nextBtn = document.querySelector('.swiper-button-next');
const prevBtn = document.querySelector('.swiper-button-prev');
const swiper = document.querySelector('.swiper').swiper;
const bar = document.querySelector(".swiper-scrollbar-drag"); 


nextBtn.addEventListener('click', function() {
	swiper.slideNext();
	moveBarRight();	
});

prevBtn.addEventListener('click', function() {
	swiper.slidePrev();
	moveBarLeft();	
});
*/

//функция определения, в какую сторону прокрутилось колесико мыши
/*
document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) { //прокрутка вправо колесом мыши
	moveBarRight();

  } else if (event.deltaY < 0) { //прокрутка влево колесом мыши
	moveBarLeft();
  }
})
*/

//обработка клавиш "вправо" и "влево" на клавиатуре

/*
document.addEventListener('keydown', (event) => {
    let key = event.key || event.keyCode; // Поддержка старых версий браузеров!
    switch(key) {
        case 'ArrowLeft': 
        case 37:
            moveBarLeft();
            event.preventDefault();
            break; 
        case 'ArrowRight': 
        case 39:
            moveBarRight();
            event.preventDefault();
            break;
    }
});
*/




//двигаем скроллбар
let moveBarRight = function () {
	if(swiper.activeIndex == 0){
		bar.style.transform = "translate3d(0px, 0px, 0px)"
	}
	if(swiper.activeIndex == 1){
		bar.style.transform = "translate3d(200px, 0px, 0px)"
	}
	if(swiper.activeIndex == 2){
		bar.style.transform = "translate3d(400px, 0px, 0px)"
	}
}
let moveBarLeft = function () {
	if(swiper.activeIndex == 0){
		bar.style.transform = "translate3d(0px, 0px, 0px)"
	}
	if(swiper.activeIndex == 1){
		bar.style.transform = "translate3d(200px, 0px, 0px)"
	}
	if(swiper.activeIndex == 2){
		bar.style.transform = "translate3d(400px, 0px, 0px)"
	}
}







/*
bar.addEventListener("mousemove", mouseMoving, false);

function mouseMoving(e) {
    console.log(e.clientX + " " + e.clientY);
}
	*/