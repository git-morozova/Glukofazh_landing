// TODO 
//https://v6.swiperjs.com/swiper-api#virtual-slides


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
	document.querySelector(".slide0__center-container").style.transform = "translate3d(324px, -1px, 0px) scale(0.87)"; // центральный блок с числом 42
	document.querySelector(".slide0__info-container").style.cssText = "transition-delay: 1s; opacity: 1"; // правый блок с текстом про 42
	document.querySelector(".slide0_layer3__main").style.transform = "translate3d(-98px, 33px, 0px) scale(1.02)"; // росток
	document.querySelector(".slide0__main-container").style.cssText = "opacity: 1"; // заг
	document.querySelector(".slide0_layer4__leaf1").style.transform = "translate3d(0px, 0px, 0px)"; // правый лист
	document.querySelector(".slide0_layer5__leaf2").style.transform = "translate3d(0px, 0px, 0px)"; // левый лист
	document.querySelector(".slide0_layer5__leaf3").style.transform = "translate3d(0px, 0px, 0px)"; // центральный лист
	document.querySelector(".slide0_layer3__nuts").style.cssText = "opacity: 1"; // желуди

	document.querySelector(".slide0_layer3__circle-img").style.cssText = "opacity: 1"; // кружок с пульсацией
	document.querySelector(".slide0_layer3__circle-out").style.cssText = "transition-delay: 1.5s; opacity: 1"; // пульсация
	document.querySelector(".slide0_layer5__lines").style.cssText = "opacity: 1"; // линии

	setTimeout(function () {
		document.querySelector(".slide0_layer5__line-wh").style.cssText = "opacity: 1"; // линия-бэк
		document.querySelector(".slide0_layer5__line-top").classList.add("animation__move-img"); // для анимации линий
	}, 10000)
}

// анимация - слайд 1
let renderFirstSlide = () => {
	document.querySelector(".slide1_layer5__leaf2").style.transform = "translate3d(-287px, 456px, 0px)"; // правый лист
	document.querySelector(".slide1_layer5__leaf3").style.transform = "translate3d(-287px, 363px, 0px)"; // центральный лист
	document.querySelector(".slide1_layer4__leaf1").style.transform = "translate3d(-2677px, 245px, 0px)"; // левый лист
	document.querySelector(".slide1__main-container-title").style.cssText = "opacity: 1"; // заг
	document.querySelector(".slide1__main-container-text").style.cssText = "opacity: 1"; // текст справа от зага
	document.querySelector(".slide1__main-container-line").style.cssText = "opacity: 1"; // полоска около зага
	document.querySelector(".slide1__title-container").style.cssText = "opacity: 1"; // подзаг контейнер
	document.querySelector(".slide1__title-back").style.cssText = "width: 471px; opacity: 1"; // подзаг
	document.querySelector(".slide1__title-text").style.cssText = "opacity: 1"; // подзаг - текст
	document.querySelector(".slide1_layer4__info-container").style.cssText = "opacity: 1"; // подзаг - слой для обработки быстрого появления

	document.querySelector(".slide1_layer5__line").classList.add("animation__line-slide1"); // для анимации линий
	document.querySelector(".slide1_layer3__line-container").style.cssText = "opacity: 1"; // кружки с пульсацией
	document.querySelector(".slide1_layer3__circle-img-first").style.cssText = "transition-delay: 0s; opacity: 1"; // кружок 1
	document.querySelector(".slide1_layer4__info-first").style.cssText = "transition-delay: 1.5s; opacity: 1; transform:translate3d(0px, 0px, 0px)"; // текст 1
	document.querySelector(".slide1_layer3__circle-out-first").style.cssText = "transition-delay: 1.5s; opacity: 1"; // пульсация 1
	document.querySelector(".slide1_layer3__circle-img-second").style.cssText = "transition-delay: 2.5s; opacity: 1"; // кружок 2
	document.querySelector(".slide1_layer4__info-second").style.cssText = "transition-delay: 2.5s; opacity: 1; transform:translate3d(0px, 0px, 0px)"; // текст 2
	document.querySelector(".slide1_layer3__circle-out-second").style.cssText = "transition-delay: 4s; opacity: 1"; // пульсация 2
	document.querySelector(".slide1_layer3__circle-img-third").style.cssText = "transition-delay: 4.2s; opacity: 1"; // кружок 3
	document.querySelector(".slide1_layer4__info-third").style.cssText = "transition-delay: 4.2s; opacity: 1; transform:translate3d(0px, 0px, 0px)"; // текст 3
	document.querySelector(".slide1_layer3__circle-out-third").style.cssText = "transition-delay: 5.7s; opacity: 1"; // пульсация 3
	document.querySelector(".slide1_layer3__circle-img-fourth").style.cssText = "transition-delay: 5.9s; opacity: 1"; // кружок 4
	document.querySelector(".slide1_layer4__info-fourth").style.cssText = "transition-delay: 5.9s; opacity: 1; transform:translate3d(0px, 0px, 0px)"; // текст 4
	document.querySelector(".slide1_layer3__circle-out-fourth").style.cssText = "transition-delay: 7.4s; opacity: 1"; // пульсация 4	
	document.querySelector(".slide1_layer5__lines").style.cssText = "opacity: 1"; // линии	
	
	setTimeout(function () {
		document.querySelector(".slide1_layer5__line").classList.add("animation__move-img-slide1"); // для анимации линий
		document.querySelector(".slide1_layer5__line-wh").style.cssText = "opacity: 1"; // линия-бэк
	}, 10000)
}

// анимация - слайд 2
let renderSecondSlide = () => {
	document.querySelector(".tree-image-intern").style.opacity = 1; // дерево
	document.querySelector(".slide2_layer2__leaf1").style.transform = "translate3d(301px, 100px, 0px)"; // левый лист
	document.querySelector(".slide2_layer3__leaf1").style.transform = "translate3d(2000px, 100px, 0px)"; // левый бледный лист
	document.querySelector(".slide2_layer3__leaf2").style.cssText = "transition-delay: 1s; transform:translate3d(-1200px, 100px, 0px)"; // центральный лист
	document.querySelector(".slide2_layer3__leaf3").style.cssText = "transform:translate3d(-1001px, 100px, 0px)"; // правый лист

	document.querySelector(".title-container").style.cssText = "opacity: 1"; // подзаг контейнер
	document.querySelector(".title-back").style.cssText = "width: 130px; opacity: 1"; // подзаг
	document.querySelector(".title-year").style.cssText = "opacity: 1"; // подзаг - текст
	document.querySelector(".slide2__top-container-line").style.cssText = "opacity: 1"; // полоска около зага
	document.querySelector(".slide2__top-container-title").style.cssText = "opacity: 1"; // заг
	document.querySelector(".slide2__circle-img").style.cssText = "opacity: 1"; // кружок с пульсацией
	document.querySelector(".slide2__circle-out").style.cssText = "transition-delay: 1.5s; opacity: 1"; // пульсация	
	document.querySelector(".slide2__main-col-left").style.cssText = "transition-delay: 1s; opacity: 1; transform:translate3d(0px, 0px, 0px)"; // левая колонка
	document.querySelector(".slide2__main-col-right").style.cssText = "transition-delay: 1s; opacity: 1"; // правая колонка

	document.querySelector(".slide2__right-one").style.cssText = "opacity: 1"; // контейнер 1
	document.querySelector(".slide2__back-one").style.cssText = "transition-delay: 2s; width: 550px; opacity: 1";  // бэк 1
	document.querySelector(".slide2__text-one").style.cssText = "transition-delay: 2.5s; opacity: 1"; // текст 1
	document.querySelector(".slide2__right-two").style.cssText = "opacity: 1"; // контейнер 2
	document.querySelector(".slide2__back-two").style.cssText = "transition-delay: 2s; width: 545px; opacity: 1";  // бэк 2
	document.querySelector(".slide2__text-two").style.cssText = "transition-delay: 2.5s; opacity: 1"; // текст 2
	document.querySelector(".slide2__right-three").classList.add("animation-typing"); // текст 3
	document.querySelector(".slide2__right-three").style.cssText = "animation-delay: 3.5s"; // текст 3
	document.querySelector(".slide2__right-four").classList.add("animation-typing"); // текст 4
	document.querySelector(".slide2__right-four").style.cssText = "animation-delay: 4s"; // текст 4
	document.querySelector(".slide2__right-five").classList.add("animation-typing"); // текст 5
	document.querySelector(".slide2__right-five").style.cssText = "animation-delay: 4.5s"; // текст 5

	document.querySelector(".slide2__right-six").style.cssText = "opacity: 1"; // контейнер 6
	document.querySelector(".slide2__back-six").style.cssText = "transition-delay: 2s; width: 160px; opacity: 1";  // бэк 6
	document.querySelector(".slide2__text-six").style.cssText = "transition-delay: 2.5s; opacity: 1"; // текст 6
	document.querySelector(".slide2__dot-seven").style.cssText = "transition-delay: 3.5s; opacity: 1"; // точка 7
	document.querySelector(".slide2__dot-seven-pulse").classList.add("animation-dot-pulse"); // анимация точки 7
	document.querySelector(".slide2__text-seven").classList.add("animation-typing"); // анимация текста 7
	document.querySelector(".slide2__text-seven").style.cssText = "animation-delay: 3.5s; opacity: 1"; // текст 7
	document.querySelector(".slide2__dot-eight").style.cssText = "transition-delay: 4s; opacity: 1"; // точка 8
	document.querySelector(".slide2__dot-eight-pulse").classList.add("animation-dot-pulse"); // анимация точки 8
	document.querySelector(".slide2__text-eight").classList.add("animation-typing"); // анимация текста 8
	document.querySelector(".slide2__text-eight").style.cssText = "animation-delay: 4s; opacity: 1"; // текст 8
	document.querySelector(".slide2__dot-nine").style.cssText = "transition-delay: 4.5s; opacity: 1"; // точка 9
	document.querySelector(".slide2__dot-nine-pulse").classList.add("animation-dot-pulse"); // анимация точки 9
	document.querySelector(".slide2__text-nine").classList.add("animation-typing"); // анимация текста 9
	document.querySelector(".slide2__text-nine").style.cssText = "animation-delay: 4.5s; opacity: 1"; // текст 9
	
	document.querySelector(".slide2__right-ten").style.cssText = "opacity: 1"; // контейнер 10
	document.querySelector(".slide2__back-ten").style.cssText = "transition-delay: 2s; width: 200px; opacity: 1";  // бэк 10
	document.querySelector(".slide2__text-ten").style.cssText = "transition-delay: 2.5s; opacity: 1"; // текст 10
	document.querySelector(".slide2__dot-eleven").style.cssText = "transition-delay: 3.5s; opacity: 1"; // точка 11
	document.querySelector(".slide2__dot-eleven-pulse").classList.add("animation-dot-pulse"); // анимация точки 11
	document.querySelector(".slide2__text-eleven").classList.add("animation-typing"); // анимация текста 11
	document.querySelector(".slide2__text-eleven").style.cssText = "animation-delay: 3.5s; opacity: 1"; // текст 11
	document.querySelector(".slide2__dot-twelve").style.cssText = "transition-delay: 4s; opacity: 1"; // точка 12
	document.querySelector(".slide2__dot-twelve-pulse").classList.add("animation-dot-pulse"); // анимация точки 12
	document.querySelector(".slide2__text-twelve").classList.add("animation-typing"); // анимация текста 12
	document.querySelector(".slide2__text-twelve").style.cssText = "animation-delay: 4s; opacity: 1"; // текст 12
	document.querySelector(".slide2__dot-thirteen").style.cssText = "transition-delay: 4.5s; opacity: 1"; // точка 13
	document.querySelector(".slide2__dot-thirteen-pulse").classList.add("animation-dot-pulse"); // анимация точки 13
	document.querySelector(".slide2__text-thirteen").classList.add("animation-typing"); // анимация текста 13
	document.querySelector(".slide2__text-thirteen").style.cssText = "animation-delay: 4.5s; opacity: 1"; // текст 13

	document.querySelector(".slide2__roots").style.cssText = "opacity: 1"; // линии
	setTimeout(function () {
		document.querySelector(".slide2__roots-intern-wh").style.cssText = "opacity: 1"; // линия-бэк
		document.querySelector(".slide2__root1-intern").classList.add("animation__move-img2"); // для анимации линий
	}, 3000)


}

// анимация - слайд 3
let renderThirdSlide = () => { 
	//при переходе со слайда 4
	document.querySelector(".title-container").style.cssText = "opacity: 1"; // подзаг контейнер
	document.querySelector(".title-back").style.cssText = "width: 130px; opacity: 1"; // подзаг
	document.querySelector(".title-year").style.cssText = "opacity: 1"; // подзаг - текст





}

// анимация исчезновения контента слайда при перелистывании на новый
let fadeZeroSlide = () => {
	document.querySelector(".slide0__center-container").style.transform = "translate3d(600px, 43px, 0px) scale(1)"; // центральный блок с числом 42
	document.querySelector(".slide0__info-container").style.cssText = "transition-delay: 0s; opacity: 0"; // правый блок с текстом про 42
	document.querySelector(".slide0_layer3__main").style.transform = "translate3d(0px, 0px, 0px) scale(1.12)"; // росток
	document.querySelector(".slide0__main-container").style.cssText = "opacity: 0"; // заг	
	document.querySelector(".slide0_layer3__nuts").style.cssText = "opacity: 0"; // желуди
	document.querySelector(".slide0_layer3__circle-img").style.cssText = "opacity: 0"; // кружок с пульсацией
	document.querySelector(".slide0_layer3__circle-out").style.cssText = "opacity: 0"; // пульсация
	document.querySelector(".slide0_layer5__lines").style.cssText = "opacity: 0"; // линии
	document.querySelector(".slide0_layer5__line-wh").style.cssText = "opacity: 0"; // линия-бэк
}

let fadeFirstSlide = () => {
	document.querySelector(".slide1_layer5__leaf2").style.transform = "translate3d(0px, 0px, 0px)"; // правый лист
	document.querySelector(".slide1_layer5__leaf3").style.transform = "translate3d(0px, 0px, 0px)"; // центральный лист
	document.querySelector(".slide1_layer4__leaf1").style.transform = "translate3d(0px, 0px, 0px)"; // левый лист
	document.querySelector(".slide1__main-container-title").style.cssText = "opacity: 0"; // заг
	document.querySelector(".slide1__main-container-text").style.cssText = "opacity: 0"; // текст справа от зага
	document.querySelector(".slide1__main-container-line").style.cssText = "opacity: 0"; // полоска около зага
	document.querySelector(".slide1__title-container").style.cssText = "opacity: 0"; // подзаг
	document.querySelector(".slide1_layer5__lines").style.cssText = "opacity: 0"; // линии	
	document.querySelector(".slide1_layer3__line-container").style.cssText = "opacity: 0"; // кружки с пульсацией
	document.querySelector(".slide1_layer4__info-container").style.cssText = "opacity: 0"; // подзаг - слой для обработки быстрого появления
}

let fadeSecondSlide = () => {
	document.querySelector(".tree-image-intern").style.opacity = 0;
	document.querySelector(".slide2_layer2__leaf1").style.transform = "translate3d(0px, 0px, 0px)"; // левый лист
	document.querySelector(".slide2_layer3__leaf1").style.transform = "translate3d(0px, 0px, 0px)"; // левый бледный лист
	document.querySelector(".slide2_layer3__leaf2").style.transform = "translate3d(0px, 0px, 0px)"; // центральный лист
	document.querySelector(".slide2_layer3__leaf3").style.cssText = "transform:translate3d(0px, 0px, 0px)"; // правый лист

	document.querySelector(".slide2__top-container-line").style.cssText = "opacity: 0"; // полоска около зага
	document.querySelector(".slide2__top-container-title").style.cssText = "opacity: 0"; // заг	
	document.querySelector(".slide2__circle-img").style.cssText = "opacity: 0"; // кружок с пульсацией
	document.querySelector(".slide2__circle-out").style.cssText = "opacity: 0"; // пульсация
	document.querySelector(".slide2__main-col-left").style.cssText = "opacity: 0"; // левая колонка
	document.querySelector(".slide2__main-col-right").style.cssText = "opacity: 0"; // правая колонка





}

// анимации для фиксов (например, дерево) - чтобы анимировать объекты в зависимости от направления свайпа - вправо или влево
let changeWithDirection = function () {	
	let currentSlide = window.localStorage.getItem("activeSlide"); 
	if (currentSlide !== "2" && currentSlide !== "3") {
		document.querySelector(".title-container").style.cssText = "opacity: 0"; // подзаг
	} else {

	}
}

// анимация при первой загрузке страницы
window.onload = function () {
	// обнуление
	document.querySelector(".swiper-button-next").style.opacity = 0;
	document.querySelector(".swiper-button-prev").style.opacity = 0;
	window.localStorage.setItem("activeSlide", "0");
	renderZeroSlide();
	renderPlayScroll();
};

// все анимации, запускающиеся в момент начала смены слайда
let changeStart = function () {
	const swiper = document.querySelector('.swiper').swiper;
	const bar = document.querySelector(".swiper-scrollbar-drag");
	renderPlayScroll();
	bar.className = "swiper-scrollbar-drag"

	if (swiper.activeIndex == 0) {
		bar.style.transform = "translate3d(0px, 0px, 0px)"
	} else if (swiper.activeIndex == 1) {
		bar.style.transform = "translate3d(0px, 0px, 0px)"
	} else if (swiper.activeIndex == 2) {
		bar.style.transform = "translate3d(100px, 0px, 0px)"
	} else if (swiper.activeIndex == 3) {		
		bar.style.transform = "translate3d(400px, 0px, 0px)"
	} else if (swiper.activeIndex == 4) {
		bar.style.transform = "translate3d(700px, 0px, 0px)"
	} else if (swiper.activeIndex == 5) {
		bar.style.transform = "translate3d(750px, 0px, 0px)"
	} else if (swiper.activeIndex == 6) {
		bar.style.transform = "translate3d(1100px, 0px, 0px)"
	} else if (swiper.activeIndex == 7) {
		bar.style.transform = "translate3d(1150px, 0px, 0px)"
	} else if (swiper.activeIndex == 8) {
		bar.style.transform = "translate3d(1200px, 0px, 0px)"
	} else if (swiper.activeIndex == 9) {
		bar.style.transform = "translate3d(1366px, 0px, 0px)"
	}

	fadeCurrentSlide();
}

//появление стрелок навигации
let toggleArrows = function () {
	let currentSlide = window.localStorage.getItem("activeSlide"); 
	if (currentSlide == "0" || currentSlide == "1" || currentSlide == "8") {
		document.querySelector(".swiper-button-next").style.opacity = 0;
		document.querySelector(".swiper-button-prev").style.opacity = 0;
	} else {
		document.querySelector(".swiper-button-next").style.opacity = 1;
		document.querySelector(".swiper-button-prev").style.opacity = 1;
	}
}

//анимации исчезновения контента
let fadeCurrentSlide = function () {	
	let currentSlide = window.localStorage.getItem("activeSlide"); 

	if (currentSlide == "0") {
		fadeFirstSlide();
	}
	if (currentSlide == "1") {
		fadeZeroSlide();
		fadeSecondSlide();
	}
	if (currentSlide == "2") {
		fadeFirstSlide();
	}
}

//анимации появления контента
let showNewSlide = function () {
	toggleArrows();
	fadeCurrentSlide();

	let currentSlide = window.localStorage.getItem("activeSlide"); 
	if (currentSlide == "0") {
		renderPlayScroll();
		renderZeroSlide();
	}
	if (currentSlide == "1") {
		renderFirstSlide();
	}
	if (currentSlide == "2") {
		renderSecondSlide();
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "1977";
	}
	if (currentSlide == "3") {
		renderThirdSlide();
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "1997";
	}
	if (currentSlide == "4") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2007";
	}
	if (currentSlide == "5") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2007";
	}
	if (currentSlide == "6") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2024";
	}
	if (currentSlide == "7") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2024";
	}
	if (currentSlide == "8") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2024";
	}
	if (currentSlide == "9") {
		document.querySelector('.swiper-scrollbar-drag').innerHTML = "2024";
	}
}

/* конструктор слайдера */
const swiper = new Swiper('.slider', {
	speed: 1000,
	parallax: true,
	spaceBetween: 18,
	centeredSlides: false,
	loop: false,
	mousewheel: {
		enabled: true,
		sensitivity: 2.4
	},


	//virtual: true,
		

	/*hashNavigation: true,*/
	on: {
		slideChangeTransitionStart: function () {						
			changeStart();
			toggleArrows();
		},

		slideChangeTransitionEnd: function () {
			window.localStorage.setItem("activeSlide", this.activeIndex); // localStorage
			showNewSlide();
			changeWithDirection();
		},	

		//slideNextTransitionStart: () => {	 // с драгом не работает			

		scrollbarDragStart: function () {
			fadeCurrentSlide();
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
			window.localStorage.setItem("activeSlide", this.activeIndex); // localStorage
			showNewSlide();
			changeWithDirection();
		}
	},

	direction: 'horizontal',
	keyboard: {
		enabled: true,
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		/*snapOnRelease: true,*/
		/*dragSize: 'auto',*/
	},
	// стрелки навигации
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		hideOnClick: false,
	},
	/*centeredSlides: true,*/
});
