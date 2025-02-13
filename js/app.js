// пропишем элемент play на скролле
let renderPlayScroll = function () {
	document.querySelector('.swiper-scrollbar-drag').innerHTML = "";
	var source = document.createElement('img');
	source.src = 'img/icons/play_scroll.svg';
	var destination = document.querySelector('.swiper-scrollbar-drag');
	destination.appendChild(source);
}


// первичная анимация - слайд 0
let renderZeroSlide = () => {
	document.querySelector(".center-container").style.transform = "translate3d(324px, -1px, 0px) scale(0.87)"; // центральный блок с числом 42
	document.querySelector(".info-container").style.cssText = "transition-delay: 1s; opacity: 1"; // правый блок с текстом про 42
	document.querySelector(".slide0_layer3__main").style.transform = "translate3d(-98px, 33px, 0px) scale(1.02)"; // росток
	document.querySelector(".main-container").style.cssText = "opacity: 1"; // заг
	document.querySelector(".slide0_layer4__leaf1").style.transform = "translate3d(0px, 0px, 0px)"; // правый лист
	document.querySelector(".slide0_layer5__leaf2").style.transform = "translate3d(0px, 0px, 0px)"; // левый лист
	document.querySelector(".slide0_layer5__leaf3").style.transform = "translate3d(0px, 0px, 0px)"; // центральный лист
	document.querySelector(".slide0_layer3__nuts").style.cssText = "opacity: 1"; // желуди
	document.querySelector(".slide0_layer3__circle-img").style.cssText = "opacity: 1"; // кружок с пульсацией
	document.querySelector(".slide0_layer3__circle-out").style.cssText = "transition-delay: 1.5s; opacity: 1"; // пульсация
	document.querySelector(".slide0_layer5__lines").style.cssText = "opacity: 1"; // линии
	setTimeout(function () {
		document.querySelector(".slide0_layer5__line-top").classList.add("move-img"); // для двойной анимации линий
	}, 10000)

}

// анимация при первой загрузке страницы
window.onload = function () {
	renderPlayScroll();
	document.querySelector(".swiper-button-next").style.opacity = 0;
	document.querySelector(".swiper-button-prev").style.opacity = 0;
	renderZeroSlide();


};

// все анимации, запускающиеся в момент начала смены слайда
let changeStart = function (slide) {
	const swiper = document.querySelector('.swiper').swiper;
	const bar = document.querySelector(".swiper-scrollbar-drag");
	renderPlayScroll();
	bar.className = "swiper-scrollbar-drag"

	if (swiper.activeIndex == 0) {
		bar.style.transform = "translate3d(0px, 0px, 0px)"
	} else if (swiper.activeIndex == 1) {
		bar.style.transform = "translate3d(100px, 0px, 0px)"
	} else if (swiper.activeIndex == 2) {
		bar.style.transform = "translate3d(400px, 0px, 0px)"
	} else if (swiper.activeIndex == 3) {
		bar.style.transform = "translate3d(700px, 0px, 0px)"
	} else if (swiper.activeIndex == 4) {
		bar.style.transform = "translate3d(750px, 0px, 0px)"
	} else if (swiper.activeIndex == 5) {
		bar.style.transform = "translate3d(1100px, 0px, 0px)"
	} else if (swiper.activeIndex == 6) {
		bar.style.transform = "translate3d(1150px, 0px, 0px)"
	} else if (swiper.activeIndex == 7) {
		bar.style.transform = "translate3d(1200px, 0px, 0px)"
	} else if (swiper.activeIndex == 8) {
		bar.style.transform = "translate3d(1366px, 0px, 0px)"
	}

	fadeCurrentSlide(slide);
}

// все анимации, запускающиеся в момент завершения смены слайда
let changeEnd = function (activeSlide) {
	showNewSlide(activeSlide);
}

//появление стрелок навигации
let toggleArrows = function (activeSlide) {
	let h1 = activeSlide.querySelector(".title-text").textContent;
	if (h1 == "slide0" || h1 == "slide8") {
		document.querySelector(".swiper-button-next").style.opacity = 0;
		document.querySelector(".swiper-button-prev").style.opacity = 0;
	} else {
		document.querySelector(".swiper-button-next").style.opacity = 1;
		document.querySelector(".swiper-button-prev").style.opacity = 1;

	}
}

//анимации исчезновения контента
let fadeCurrentSlide = function (slide) {
	let h1 = slide.querySelector(".title-text").textContent;

	if (h1 == "slide1") {
		document.querySelector(".tree-image-intern").style.opacity = 0;
		document.querySelector(".center-container").style.transform = "translate3d(600px, 43px, 0px) scale(1)"; // центральный блок с числом 42
		document.querySelector(".info-container").style.cssText = "transition-delay: 0s; opacity: 0"; // правый блок с текстом про 42
		document.querySelector(".slide0_layer3__main").style.transform = "translate3d(0px, 0px, 0px) scale(1.12)"; // росток
		document.querySelector(".main-container").style.cssText = "opacity: 0"; // заг	
		document.querySelector(".slide0_layer3__nuts").style.cssText = "opacity: 0"; // желуди
		document.querySelector(".slide0_layer3__circle-img").style.cssText = "opacity: 0"; // кружок с пульсацией
		document.querySelector(".slide0_layer3__circle-out").style.cssText = "opacity: 0"; // пульсация
		document.querySelector(".slide0_layer5__lines").style.cssText = "opacity: 0"; // линии
	}
	if (h1 == "slide2") {
		document.querySelector(".tree-image-junior").style.opacity = 0;
	}
}

//анимации появления контента
let showNewSlide = function (activeSlide) {
	let h1 = activeSlide.querySelector(".title-text").textContent;
	toggleArrows(activeSlide);

	if (h1 == "slide0") {
		renderPlayScroll();
		renderZeroSlide();
	}
	if (h1 == "slide1") {
		document.querySelector(".tree-image-intern").style.opacity = 1;
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "1977";
	}
	if (h1 == "slide2") {
		document.querySelector(".tree-image-junior").style.opacity = 1;
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "1997";
	}
	if (h1 == "slide3") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2007";
	}
	if (h1 == "slide4") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2007";
	}
	if (h1 == "slide5") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2024";
	}
	if (h1 == "slide6") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2024";
	}
	if (h1 == "slide7") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2024";
	}
	if (h1 == "slide8") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2024";
	}
}



/* конструктор слайдера */
new Swiper('.slider', {
	speed: 1200,
	parallax: true,
	spaceBetween: 18,
	centeredSlides: false,
	loop: false,
	mousewheel: {
		enabled: true,
		sensitivity: 2.4
	},
	/*simulateTouch:true,*/
	/*hashNavigation: true,*/
	on: {
		init: function () {
			// первая загрузка слайдера

			// анимация дерева
			/*let tree = document.querySelector(".leaf-image-first");
			if (tree) {
				tree.style.opacity = 1;
			}*/
		},

		slideChangeTransitionStart: function () {
			this.slides.forEach(slide => {
				changeStart(slide);
				let activeSlide = this.slides[this.activeIndex];
				toggleArrows(activeSlide);
			})
		},

		slideChangeTransitionEnd: function () {
			let activeSlide = this.slides[this.activeIndex];
			changeEnd(activeSlide);
		},

		scrollbarDragStart: function () {
			this.slides.forEach(slide => {
				fadeCurrentSlide(slide);
			})

		},

		scrollbarDragMove: function () {
			dropPosition = document.querySelector(".swiper-scrollbar-drag").style.transform;
			dropPositionX = Number(dropPosition.substring(12, dropPosition.indexOf("px"))); //вытаскиваем положение ползунка по Х при перемещении
			renderPlayScroll();

			//убираем баг с выезжающим за пределы скроллбара ползунком
			const bar = document.querySelector(".swiper-scrollbar-drag");
			if (dropPositionX > 1360) {
				bar.className = "swiper-scrollbar-drag bar-end"
			} else {
				bar.className = "swiper-scrollbar-drag"
			}
		},

		scrollbarDragEnd: function () {
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
		/*snapOnRelease: true,*/
		// Size (Length) of Scrollbar Draggable Element in px
		/*dragSize: 'auto',*/
	},

	// Navigation Arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		hideOnClick: false,
	},
	/*centeredSlides: true,*/

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


/*
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
*/


/*
bar.addEventListener("mousemove", mouseMoving, false);

function mouseMoving(e) {
	console.log(e.clientX + " " + e.clientY);
}
*/