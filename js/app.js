// все анимации, запускающиеся в момент начала смены слайда
let changeStart = function (slide) {
	let h1 = slide.querySelector(".title-text").textContent;

	if (h1 == "slide0") {
		document.querySelector(".tree-image-intern").style.opacity = 0;
	}
	if (h1 == "slide1") {
		document.querySelector(".tree-image-junior").style.opacity = 0;
	}
}

// все анимации, запускающиеся в момент завершения смены слайда
let changeEnd = function (activeSlide) {
	let h1 = activeSlide.querySelector(".title-text").textContent;

	if (h1 == "slide0") {
		document.querySelector(".tree-image-intern").style.opacity = 1;
	}
	if (h1 == "slide1") {
		document.querySelector(".tree-image-junior").style.opacity = 1;
	}
}


let bar = document.querySelector(".swiper-scrollbar-drag");
bar.addEventListener('mousedown', (e) => {
	dragging = true
	startX = e.pageX - Number.parseInt(bar.style.left || 0)
	startY = e.pageY - Number.parseInt(bar.style.top || 0)
  })



//двигаем скроллбар
let moveBarRight = function () {
	bar.style.transition = "all 1s ease"
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
		bar.style.transition = "all 1s ease"
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
	simulateTouch:false,
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
		
	},

	direction: 'horizontal',
	keyboard: {
		enabled: true,
	},
	/*centeredSlides: true,*/
	
});


/*стрелки навигации*/
const swiper = document.querySelector('.swiper').swiper;
const nextBtn = document.querySelector('.swiper-button-next');
const prevBtn = document.querySelector('.swiper-button-prev');

nextBtn.addEventListener('click', function() {
	swiper.slideNext();
	moveBarRight();	
});

prevBtn.addEventListener('click', function() {
	swiper.slidePrev();
	moveBarLeft();	
});


//функция определения, в какую сторону прокрутилось колесико мыши
document.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) { //прокрутка вправо колесом мыши
	moveBarRight();

  } else if (event.deltaY < 0) { //прокрутка влево колесом мыши
	moveBarLeft();
  }
})


//обработка клавиш "вправо" и "влево" на клавиатуре
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
