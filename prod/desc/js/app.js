const swiper = new Swiper('.slider', {
    speed: 100,
    parallax: true,
    spaceBetween: 18,
    centeredSlides: false,
    allowTouchMove: false,
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
            window.localStorage.setItem("activeSlide", this.activeIndex);
            showNewSlide();
            changeWithDirection();
            deletePopups();
        },
        scrollbarDragStart: function () {
            fadeCurrentSlide();
        },

        scrollbarDragMove: function () {
            dropPosition = document.querySelector(".swiper-scrollbar-drag").style.transform;
            dropPositionX = Number(dropPosition.substring(12, dropPosition.indexOf("px")));			
            renderPlayScroll();
            //убираем баг с выезжающим за пределы скроллбара ползунком	
            const bar = document.querySelector(".swiper-scrollbar-drag");
            const screenWidth = window.outerWidth;
            if (screenWidth <= 1920) {
                if (dropPositionX > 1093) {
                    bar.className = "swiper-scrollbar-drag bar-end"
                } else {
                    bar.className = "swiper-scrollbar-drag"
                }
            } else {
                if (dropPositionX > 1360) {
                    bar.className = "swiper-scrollbar-drag bar-end"
                } else {
                    bar.className = "swiper-scrollbar-drag"
                }
            }
        },
        scrollbarDragEnd: function () {
            window.localStorage.setItem("activeSlide", this.activeIndex); // localStorage
            showNewSlide();
            changeWithDirection();
            deletePopups();
        }
    },
    direction: 'horizontal',
    keyboard: {
        enabled: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: false,
    },
});

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
    document.querySelector(".slide0_layer3__circle-gif").style.cssText = "transition-delay: 1.5s; opacity: 1"; // анимация кружка с пульсацией
    document.querySelector(".slide0_layer5__lines").style.cssText = "opacity: 1"; // линии
    setTimeout(function () {
        document.querySelector(".slide0_layer5__line-wh").style.cssText = "opacity: 1"; // линия-бэк
        document.querySelector(".slide0_layer5__line-top").classList.add("animation__move-img"); // для анимации линий
    }, 10000)
}
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
    document.querySelector(".slide1_layer3__circle-gif-first").style.cssText = "transition-delay: 1.5s; opacity: 1"; // анимация кружка с пульсацией 1
    document.querySelector(".slide1_layer3__circle-img-second").style.cssText = "transition-delay: 2.5s; opacity: 1"; // кружок 2
    document.querySelector(".slide1_layer4__info-second").style.cssText = "transition-delay: 2.5s; opacity: 1; transform:translate3d(0px, 0px, 0px)"; // текст 2
    document.querySelector(".slide1_layer3__circle-gif-second").style.cssText = "transition-delay: 4s; opacity: 1"; // анимация кружка с пульсацией 2
    document.querySelector(".slide1_layer3__circle-img-third").style.cssText = "transition-delay: 4.2s; opacity: 1"; // кружок 3
    document.querySelector(".slide1_layer4__info-third").style.cssText = "transition-delay: 4.2s; opacity: 1; transform:translate3d(0px, 0px, 0px)"; // текст 3
    document.querySelector(".slide1_layer3__circle-gif-third").style.cssText = "transition-delay: 5.7s; opacity: 1"; // анимация кружка с пульсацией 3
    document.querySelector(".slide1_layer3__circle-img-fourth").style.cssText = "transition-delay: 5.9s; opacity: 1"; // кружок 4
    document.querySelector(".slide1_layer4__info-fourth").style.cssText = "transition-delay: 5.9s; opacity: 1; transform:translate3d(0px, 0px, 0px)"; // текст 4
    document.querySelector(".slide1_layer3__circle-gif-fourth").style.cssText = "transition-delay: 7.4s; opacity: 1"; // анимация кружка с пульсацией 4	
    document.querySelector(".slide1_layer5__lines").style.cssText = "opacity: 1"; // линии		
    setTimeout(function () {
        document.querySelector(".slide1_layer5__line").classList.add("animation__move-img-slide1"); // для анимации линий
        document.querySelector(".slide1_layer5__line-wh").style.cssText = "opacity: 1"; // линия-бэк
    }, 10000)
}
let renderSecondSlide = () => {
    document.querySelector(".slide2__bottom-container").style.cssText = "opacity: 1; z-index: 100"; // кнопка	
    document.querySelector(".tree-image-intern").style.opacity = 1; // дерево
    document.querySelector(".slide2_layer2__leaf1").style.transform = "translate3d(301px, 100px, 0px)"; // левый лист
    document.querySelector(".slide2_layer3__leaf1").style.transform = "translate3d(2000px, 100px, 0px)"; // левый бледный лист
    document.querySelector(".slide2_layer3__leaf2").style.cssText = "transition-delay: 1s; transform:translate3d(-1200px, 100px, 0px)"; // центральный лист
    document.querySelector(".slide2_layer3__leaf3").style.cssText = "transform:translate3d(-1001px, 100px, 0px)"; // правый лист
    document.querySelector(".title-container").style.cssText = "opacity: 1"; // подзаг контейнер
    document.querySelector(".title-back").style.cssText = "width: 130px; opacity: 1"; // подзаг
    document.querySelector(".title-year").style.cssText = "transition-delay: 1s; opacity: 1"; // подзаг - текст
    document.querySelector(".slide2__top-container-line").style.cssText = "opacity: 1"; // полоска около зага
    document.querySelector(".slide2__top-container-title").style.cssText = "opacity: 1"; // заг
    document.querySelector(".slide2__circle-img").style.cssText = "opacity: 1"; // кружок с пульсацией
    document.querySelector(".slide2__circle-gif").style.cssText = "transition-delay: 1.5s; opacity: 1"; // пульсация	
    document.querySelector(".slide2__main-col-left").style.cssText = "transition-delay: 1s; opacity: 1; transform:translate3d(0px, 0px, 0px)"; // левая колонка
    document.querySelector(".slide2__main-col-right").style.cssText = "transition-delay: 1s; opacity: 1"; // правая колонка
    document.querySelector(".slide2_layer2__line").style.cssText = "transition-delay: 1.5s;opacity: 1"; // линия вертикальная
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
    document.querySelector(".slide2__root1-intern").classList.add("animation__root-slide2"); // для анимации корней
    document.querySelector(".slide2__root1-intern").style.cssText = "opacity: 1"; // корень 1
    document.querySelector(".slide2__root2-intern").style.cssText = "opacity: 1"; // корень 2
    document.querySelector(".slide2__root3-intern").style.cssText = "opacity: 1"; // корень 3
    document.querySelector(".slide2__root1-back").style.cssText = "opacity: 1"; // корень-бэк
    setTimeout(function () {
        document.querySelector(".slide2__root1-intern").classList.remove("animation__root-slide2"); // для анимации корней
        document.querySelector(".slide2__root1-intern").classList.add("animation__move-img2"); // для анимации корней
    }, 7000)
}
let renderThirdSlide = () => {
    document.querySelector(".slide3__bottom-container").style.cssText = "opacity: 1; z-index: 100"; // кнопка	
    document.querySelector(".title-back").style.cssText = "width: 130px; opacity: 1"; // подзаг
    document.querySelector(".title-year").style.cssText = "opacity: 1"; // подзаг - текст
    document.querySelector(".title-container").style.cssText = "opacity: 1; transform: translate3d(116px, -10px, 0px)"; // подзаг контейнер
    document.querySelector(".tree-image-junior").style.opacity = 1; // дерево
    document.querySelector(".slide3__poly").style.opacity = 1; // пентагон
    document.querySelector(".slide3_layer4__leaf1").style.transform = "translate3d(-2000px, 87px, 0px)"; // нижний лист
    document.querySelector(".slide3_layer2__leaf2").style.transform = "translate3d(1301px, 100px, 0px)"; // левый лист
    document.querySelector(".slide3_layer3__leaf3").style.transform = "translate3d(701px, -200px, 0px)"; // верхний лист
    document.querySelector(".slide3__root1-junior").classList.add("animation__root-slide2"); // для анимации корней
    document.querySelector(".slide3__root1-junior").style.cssText = "opacity: 1"; // корень 1
    document.querySelector(".slide3__root2-junior").style.cssText = "opacity: 1"; // корень 2
    document.querySelector(".slide3__root1-back").style.cssText = "opacity: 1"; // корень-бэк
    document.querySelector(".slide3__top-container-line").style.cssText = "opacity: 1"; // полоска около зага
    document.querySelector(".slide3__top-container-title").style.cssText = "opacity: 1"; // заг
    document.querySelector(".slide3__main").style.cssText = "transition-delay: 1s; opacity: 1"; // колонка
    document.querySelector(".slide3__back-one").style.cssText = "transition-delay: 1s; width: 996px; opacity: 1";  // бэк 1
    document.querySelector(".slide3__text-one").style.cssText = "transition-delay: 1.5s; opacity: 1"; // текст 1
    document.querySelector(".slide3__bigdot-two").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 2
    document.querySelector(".slide3__bigdot-two-pulse").classList.add("animation-bigdot-pulse"); // анимация точки 2
    document.querySelector(".slide3__text-two").style.cssText = "transition-delay: 2.5s; transform: translate3d(0, 111px, 0px); opacity: 1" // анимация текста 2
    document.querySelector(".slide3__bigdot-three").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 3
    document.querySelector(".slide3__bigdot-three-pulse").classList.add("animation-bigdot-pulse"); // анимация точки 3
    document.querySelector(".slide3__text-three").style.cssText = "transition-delay: 2.5s; transform: translate3d(0, 203px, 0px); opacity: 1" // анимация текста 3
    document.querySelector(".slide3__bigdot-four").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 4
    document.querySelector(".slide3__bigdot-four-pulse").classList.add("animation-bigdot-pulse"); // анимация точки 4
    document.querySelector(".slide3__text-four").style.cssText = "transition-delay: 2.5s; transform: translate3d(0, 245px, 0px); opacity: 1" // анимация текста 4
    document.querySelector(".slide3__dot-five").style.cssText = "transition-delay: 3.5s; opacity: 1"; // точка 5
    document.querySelector(".slide3__dot-five-pulse").classList.add("animation-dot-pulse"); // анимация точки 5
    document.querySelector(".slide3__text-five").style.cssText = "transition-delay: 3.5s; transform: translate3d(0, -120px, 0px); opacity: 1" // анимация текста 5
    setTimeout(function () {
        document.querySelector(".slide3__root1-junior").classList.remove("animation__root-slide3"); // для анимации корней
        document.querySelector(".slide3__root1-junior").classList.add("animation__move-img3"); // для анимации корней
    }, 8000)
}
let renderFourthSlide = () => {
    document.querySelector(".slide4__bottom-container").style.cssText = "opacity: 1; z-index: 100"; // кнопка
    document.querySelector(".title-back").style.cssText = "width: 130px; opacity: 1"; // подзаг
    document.querySelector(".title-year").style.cssText = "opacity: 1"; // подзаг - текст	
    document.querySelector(".title-container").style.cssText = "opacity: 1; transform: translate3d(193px, 2px, 0px)"; // подзаг контейнер
    document.querySelector(".tree-image-middle").style.opacity = 1; // дерево
    document.querySelector(".slide4_layer3__leaf1").style.transform = "translate3d(-670px, 285px, 0px)"; // задний лист
    document.querySelector(".slide4_layer4__leaf2").style.transform = "translate3d(-519px, 85px, 0px)"; // верхний лист
    document.querySelector(".slide4__root1-middle").classList.add("animation__root-slide4"); // для анимации корней
    document.querySelector(".slide4__root1-middle").style.cssText = "opacity: 1"; // корень 1
    document.querySelector(".slide4__root2-middle").style.cssText = "opacity: 1"; // корень 2
    document.querySelector(".slide4__root1-back").style.cssText = "opacity: 1"; // корень-бэк
    document.querySelector(".slide4__top-container-line").style.cssText = "opacity: 1"; // полоска около зага
    document.querySelector(".slide4__top-container-title").style.cssText = "opacity: 1"; // заг
    document.querySelector(".slide4__main").style.cssText = "transition-delay: 1s; opacity: 1"; // колонка
    document.querySelector(".slide4_layer2__line").style.cssText = "transition-delay: 1.5s;opacity: 1"; // линия вертикальная
    document.querySelector(".slide4__main-one").style.cssText = "transition-delay: 1.5s; transform: translate3d(0, 200px, 0px); opacity: 1"; // текст 1
    document.querySelector(".slide4__main-two").style.cssText = "transition-delay: 1.5s; transform: translate3d(0, 390px, 0px); opacity: 1"; // текст 2
    document.querySelector(".slide4__main-three").style.cssText = "opacity: 1"; // контейнер 3
    document.querySelector(".slide4__back-three").style.cssText = "transition-delay: 2s; width: 540px; opacity: 1";  // бэк 3
    document.querySelector(".slide4__text-three").style.cssText = "transition-delay: 2.5s; opacity: 1"; // текст 3
    document.querySelector(".slide4__main-four").style.cssText = "opacity: 1"; // контейнер 4
    document.querySelector(".slide4__back-four").style.cssText = "transition-delay: 2s; width: 360px; opacity: 1";  // бэк 4
    document.querySelector(".slide4__text-four").style.cssText = "transition-delay: 2.5s; opacity: 1"; // текст 4
    document.querySelector(".slide4__dot-five").style.cssText = "transition-delay: 3s; opacity: 1"; // точка 5
    document.querySelector(".slide4__dot-five-pulse").classList.add("animation-dot-pulse"); // анимация точки 5
    document.querySelector(".slide4__text-five").classList.add("animation-typing"); // анимация текста 5
    document.querySelector(".slide4__text-five").style.cssText = "animation-delay: 3.5s; opacity: 1"; // текст 5
    document.querySelector(".slide4__dot-six").style.cssText = "transition-delay: 3.5s; opacity: 1"; // точка 6
    document.querySelector(".slide4__dot-six-pulse").classList.add("animation-dot-pulse"); // анимация точки 6
    document.querySelector(".slide4__text-six").classList.add("animation-typing"); // анимация текста 6
    document.querySelector(".slide4__text-six").style.cssText = "animation-delay: 4s; opacity: 1"; // текст 6
    document.querySelector(".slide4__dot-seven").style.cssText = "transition-delay: 4s; opacity: 1"; // точка 7
    document.querySelector(".slide4__dot-seven-pulse").classList.add("animation-dot-pulse"); // анимация точки 7
    document.querySelector(".slide4__text-seven").classList.add("animation-typing"); // анимация текста 7
    document.querySelector(".slide4__text-seven").style.cssText = "animation-delay: 4.5s; opacity: 1"; // текст 7
    setTimeout(function () {
        document.querySelector(".slide4__root1-middle").classList.remove("animation__root-slide4"); // для анимации корней
        document.querySelector(".slide4__root1-middle").classList.add("animation__move-img4"); // для анимации корней
    }, 8000)
}
let renderFifthSlide = () => {
    document.querySelector(".slide4__bottom-container").style.cssText = "opacity: 1; z-index: 100"; // кнопка
    document.querySelector(".title-back").style.cssText = "width: 130px; opacity: 1"; // подзаг
    document.querySelector(".title-year").style.cssText = "opacity: 1"; // подзаг - текст
    document.querySelector(".title-container").style.cssText = "opacity: 1; transform: translate3d(193px, 2px, 0px)"; // подзаг контейнер
    document.querySelector(".tree-image-middle").style.opacity = 1; // дерево
    document.querySelector(".slide5__root1-middle").classList.add("animation__root-slide4"); // для анимации корней
    document.querySelector(".slide5__root1-middle").style.cssText = "opacity: 1"; // корень 1
    document.querySelector(".slide5__root2-middle").style.cssText = "opacity: 1"; // корень 2
    document.querySelector(".slide5__root1-back").style.cssText = "opacity: 1"; // корень-бэк
    document.querySelector(".slide5__poly").style.opacity = 1; // пентагон
    document.querySelector(".slide5_layer3__leaf1").style.transform = "translate3d(-1100px, -200px, 0px)"; // левый лист
    document.querySelector(".slide5_layer3__leaf2").style.transform = "translate3d(-1100px, -200px, 0px)"; // средний лист
    document.querySelector(".slide5_layer3__leaf3").style.transform = "translate3d(-1100px, -200px, 0px)"; // правый лист
    document.querySelector(".slide5_layer2__line").style.cssText = "transition-delay: 1.5s;opacity: 1"; // линия вертикальная
    document.querySelector(".slide5_layer2__circle-arrow-one").style.cssText = "opacity: 1"; // стрелка в кружке 1
    document.querySelector(".slide5_layer2__circle-arrow-two").style.cssText = "opacity: 1"; // стрелка в кружке 2
    document.querySelector(".slide5__circle-img").style.cssText = "transition-delay: 2s; opacity: 1"; // кружок с пульсацией
    document.querySelector(".slide5__circle-gif").style.cssText = "transition-delay: 2.5s; opacity: 1"; // пульсация
    document.querySelector(".slide5__main").style.cssText = "transition-delay: 1s; opacity: 1"; // колонка
    document.querySelector(".slide5__back-one").style.cssText = "transition-delay: 1s; width: 694px; opacity: 1";  // бэк 1
    document.querySelector(".slide5__text-one").style.cssText = "transition-delay: 1.5s; opacity: 1"; // текст 1
    document.querySelector(".slide5__bigdot-two").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 2
    document.querySelector(".slide5__bigdot-two-pulse").classList.add("animation-bigdot-pulse"); // анимация точки 2
    document.querySelector(".slide5__text-two").style.cssText = "transition-delay: 2.5s; transform: translate3d(0, 111px, 0px); opacity: 1" // анимация текста 2
    document.querySelector(".slide5__bigdot-three").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 3
    document.querySelector(".slide5__darkdot-three").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 3 левая
    document.querySelector(".slide5__main-three-arrow").style.cssText = "transition-delay: 2s; opacity: 1"; // стрелка 3
    document.querySelector(".slide5__bigdot-three-pulse").classList.add("animation-bigdot-pulse"); // анимация точки 3
    document.querySelector(".slide5__text-three").style.cssText = "transition-delay: 2.5s; transform: translate3d(0, 203px, 0px); opacity: 1" // анимация текста 3
    document.querySelector(".slide5__bigdot-four").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 4
    document.querySelector(".slide5__darkdot-four").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 4 левая
    document.querySelector(".slide5__main-four-arrow").style.cssText = "transition-delay: 2s; opacity: 1"; // стрелка 4
    document.querySelector(".slide5__bigdot-four-pulse").classList.add("animation-bigdot-pulse"); // анимация точки 4
    document.querySelector(".slide5__text-four").style.cssText = "transition-delay: 2.5s; transform: translate3d(0, 245px, 0px); opacity: 1" // анимация текста 4
    document.querySelector(".slide5__bigdot-five").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 5
    document.querySelector(".slide5__darkdot-five").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 5 левая
    document.querySelector(".slide5__main-five-arrow").style.cssText = "transition-delay: 2s; opacity: 1"; // стрелка 5
    document.querySelector(".slide5__bigdot-five-pulse").classList.add("animation-bigdot-pulse"); // анимация точки 5
    document.querySelector(".slide5__text-five").style.cssText = "transition-delay: 2.5s; transform: translate3d(0, 295px, 0px); opacity: 1" // анимация текста 5
    setTimeout(function () {
        document.querySelector(".slide5__root1-middle").classList.remove("animation__root-slide5"); // для анимации корней
        document.querySelector(".slide5__root1-middle").classList.add("animation__move-img5"); // для анимации корней
    }, 9000)
}
let renderSixthSlide = () => {
    document.querySelector(".slide6__bottom-container").style.cssText = "opacity: 1; z-index: 100"; // кнопка
    document.querySelector(".title-back").style.cssText = "width: 130px; opacity: 1"; // подзаг
    document.querySelector(".title-year").style.cssText = "opacity: 1"; // подзаг - текст
    document.querySelector(".title-container").style.cssText = "opacity: 1; transform: translate3d(193px, 2px, 0px)"; // подзаг контейнер
    document.querySelector(".tree-image-senior").style.cssText = "opacity: 1; transform: translate3d(0, 0, 0) scale(1)"; // дерево
    document.querySelector(".slide6__root1-senior").classList.add("animation__root-slide4"); // для анимации корней
    document.querySelector(".slide6__root1-senior").style.cssText = "opacity: 1"; // корень 1
    document.querySelector(".slide6__root2-senior").style.cssText = "opacity: 1"; // корень 2
    document.querySelector(".slide6__root1-back").style.cssText = "opacity: 1"; // корень-бэк
    document.querySelector(".slide6__poly").style.opacity = 1; // пентагон
    document.querySelector(".slide6_layer3__leaf1").style.transform = "translate3d(103px, -71px, 0px)"; // левый лист
    document.querySelector(".slide6_layer3__leaf2").style.transform = "translate3d(-1250px, -250px, 0px)"; // средний лист
    document.querySelector(".slide6_layer3__leaf3").style.transform = "translate3d(-1400px, -200px, 0px)"; // правый лист
    document.querySelector(".slide6__top-container-line").style.cssText = "opacity: 1"; // полоска около зага
    document.querySelector(".slide6__top-container-title").style.cssText = "opacity: 1"; // заг
    document.querySelector(".slide6_layer2__line").style.cssText = "transition-delay: 1.5s;opacity: 1"; // линия вертикальная
    document.querySelector(".slide6_layer2__circle-arrow-one").style.cssText = "opacity: 1"; // стрелка в кружке 1
    document.querySelector(".slide6_layer2__circle-arrow-two").style.cssText = "opacity: 1"; // стрелка в кружке 2
    document.querySelector(".slide6__circle-img").style.cssText = "transition-delay: 4s; opacity: 1"; // кружок с пульсацией
    document.querySelector(".slide6__circle-gif").style.cssText = "transition-delay: 4.5s; opacity: 1"; // пульсация
    document.querySelector(".slide6__main").style.cssText = "transition-delay: 1s; opacity: 1"; // колонка
    document.querySelector(".slide6__back-one").style.cssText = "transition-delay: 1s; width: 766px; opacity: 1";  // бэк 1
    document.querySelector(".slide6__text-one").style.cssText = "transition-delay: 1.5s; opacity: 1"; // текст 1
    document.querySelector(".slide6__bigdot-three").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 3
    document.querySelector(".slide6__darkdot-three").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 3 левая
    document.querySelector(".slide6__main-three-arrow").style.cssText = "transition-delay: 2s; opacity: 1"; // стрелка 3
    document.querySelector(".slide6__bigdot-three-pulse").classList.add("animation-bigdot-pulse"); // анимация точки 3
    document.querySelector(".slide6__text-three").style.cssText = "transition-delay: 2.5s; transform: translate3d(0, 103px, 0px); opacity: 1" // анимация текста 3
    document.querySelector(".slide6__bigdot-four").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 4
    document.querySelector(".slide6__darkdot-four").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 4 левая
    document.querySelector(".slide6__main-four-arrow").style.cssText = "transition-delay: 2s; opacity: 1"; // стрелка 4
    document.querySelector(".slide6__bigdot-four-pulse").classList.add("animation-bigdot-pulse"); // анимация точки 4
    document.querySelector(".slide6__text-four").style.cssText = "transition-delay: 2.5s; transform: translate3d(0, 145px, 0px); opacity: 1" // анимация текста 4
    document.querySelector(".slide6__bigdot-five").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 5
    document.querySelector(".slide6__darkdot-five").style.cssText = "transition-delay: 2s; opacity: 1"; // точка 5 левая
    document.querySelector(".slide6__main-five-arrow").style.cssText = "transition-delay: 2s; opacity: 1"; // стрелка 5
    document.querySelector(".slide6__bigdot-five-pulse").classList.add("animation-bigdot-pulse"); // анимация точки 5
    document.querySelector(".slide6__text-five").style.cssText = "transition-delay: 2.5s; transform: translate3d(0, 275px, 0px); opacity: 1" // анимация текста 5
    setTimeout(function () {
        document.querySelector(".slide6__root1-senior").classList.remove("animation__root-slide6"); // для анимации корней
        document.querySelector(".slide6__root1-senior").classList.add("animation__move-img6"); // для анимации корней
    }, 10000)
}
let renderSeventhSlide = () => {
    document.querySelector(".tree-image-senior").style.cssText = "opacity: 1; transform: translate3d(1037px, -260px, 0px) scale(1.95)"; // дерево	
    document.querySelector(".slide7__root1-senior").classList.add("animation__root-slide4"); // для анимации корней
    document.querySelector(".slide7__root1-senior").style.cssText = "opacity: 1"; // корень 1
    document.querySelector(".slide7__root2-senior").style.cssText = "opacity: 1"; // корень 2
    document.querySelector(".slide7__root1-back").style.cssText = "opacity: 1"; // корень-бэк
    document.querySelector(".slide7__poly").style.opacity = 1; // пентагон левый
    document.querySelector(".slide7__poly2").style.opacity = 1; // пентагон правый
    document.querySelector(".slide7_layer3__nuts").style.cssText = "opacity: 1"; // желуди
    document.querySelector(".slide7_layer3__leaf1").style.transform = "translate3d(327px, 100px, 0px)"; // левый лист
    document.querySelector(".slide7_layer2__leaf2").style.transform = "translate3d(327px, -100px, 0px)"; // нижний левый лист
    document.querySelector(".slide7_layer3__leaf3").style.transform = "translate3d(827px, -100px, 0px)"; // правый лист
    document.querySelector(".slide7_layer2__leaf4").style.transform = "translate3d(881px, 283px, 0px)"; // нижний правый лист
    document.querySelector(".slide7__top-container-line").style.cssText = "opacity: 1"; // полоска около зага
    document.querySelector(".slide7__top-container-title").style.cssText = "opacity: 1"; // заг
    document.querySelector(".slide7__main").style.cssText = "opacity: 1"; // колонка
    document.querySelector(".slide7__dot-left").style.cssText = "transition-delay: 1s; opacity: 1"; // точка левая
    document.querySelector(".slide7__dot-left-pulse").classList.add("animation-dot2-pulse"); // анимация точки 
    document.querySelector(".slide7__text-left").style.cssText = "transition-delay: 1.5s; transform: translate3d(0, -120px, 0px); opacity: 1" // анимация текста
    document.querySelector(".slide7__dot-right").style.cssText = "transition-delay: 1s; opacity: 1"; // точка правая
    document.querySelector(".slide7__dot-right-pulse").classList.add("animation-dot2-pulse"); // анимация точки 
    document.querySelector(".slide7__text-right").style.cssText = "transition-delay: 1.5s; transform: translate3d(0, -120px, 0px); opacity: 1" // анимация текста  
    setTimeout(function () {
        document.querySelector(".slide7__root1-senior").classList.remove("animation__root-slide7"); // для анимации корней
        document.querySelector(".slide7__root1-senior").classList.add("animation__move-img7"); // для анимации корней
    }, 8000)
}
let renderEigthSlide = () => {
    document.querySelector(".header-right-main").style.cssText = "display: flex"; // ссылка на QR 
    document.querySelector(".tree-image-senior").style.cssText = "opacity: 1; transform: translate3d(-42px, -262px, 0px) scale(1.95)"; // дерево
    document.querySelector(".slide8__root1-senior").classList.add("animation__root-slide4"); // для анимации корней
    document.querySelector(".slide8__root1-senior").style.cssText = "opacity: 1"; // корень 1
    document.querySelector(".slide8__root2-senior").style.cssText = "opacity: 1"; // корень 2
    document.querySelector(".slide8__root1-back").style.cssText = "opacity: 1"; // корень-бэк
    document.querySelector(".header-main").style.cssText = "z-index: 600"; // хэдер
    document.querySelector(".slide8_topline").style.cssText = "opacity: 1"; // полоса под хедером	
    document.querySelector(".slide8__poly").style.opacity = 1; // пентагон
    document.querySelector(".slide8_layer3__nuts").style.cssText = "opacity: 1"; // желуди
    document.querySelector(".slide8_layer3__leaf3").style.cssText = "opacity: 1"; // левый лист
    document.querySelector(".slide8_layer3__leaf1").style.transform = "translate3d(1190px, 82px, 0px)"; // правый лист
    document.querySelector(".slide8_layer3__leaf2").style.transform = "translate3d(927px, 122px, 0px)"; // центральный лист
    document.querySelector(".slide8_layer3__leaf3").style.transform = "translate3d(2332px, 128px, 0px)"; // левый лист	
    document.querySelector(".slide8__main-left").style.cssText = "opacity: 1"; // левая 
    document.querySelector(".slide8__text-left").style.cssText = "transform: translate3d(2000px, 0, 0px);transition-delay: 1.5s; background-color: rgba(255, 255, 255, 0.3); backdrop-filter: blur(10px) opacity(1)"; // левая блюр
    document.querySelector(".slide8__main-right").style.cssText = "opacity: 1"; // правая 
    document.querySelector(".slide8__text-right").style.cssText = "transform: translate3d(2658px, 0px, 0px);transition-delay: 1.5s; backdrop-filter: blur(10px) opacity(1);background-color: rgba(255, 255, 255, 0.3);"; // правая блюр
    setTimeout(function () {
        document.querySelector(".slide8__root1-senior").classList.remove("animation__root-slide8"); // для анимации корней
        document.querySelector(".slide8__root1-senior").classList.add("animation__move-img8"); // для анимации корней
    }, 8000)
}
let fadeZeroSlide = () => {
    document.querySelector(".slide0__center-container").style.transform = "translate3d(600px, 43px, 0px) scale(1)"; // центральный блок с числом 42
    document.querySelector(".slide0__info-container").style.cssText = "transition-delay: 0s; opacity: 0"; // правый блок с текстом про 42
    document.querySelector(".slide0_layer3__main").style.transform = "translate3d(0px, 0px, 0px) scale(1.12)"; // росток
    document.querySelector(".slide0__main-container").style.cssText = "opacity: 0"; // заг	
    document.querySelector(".slide0_layer3__nuts").style.cssText = "opacity: 0"; // желуди
    document.querySelector(".slide0_layer3__circle-img").style.cssText = "opacity: 0"; // кружок с пульсацией
    document.querySelector(".slide0_layer3__circle-gif").style.cssText = "opacity: 0"; // пульсация	
    document.querySelector(".slide0_layer5__line-top").classList.remove("animation__move-img"); // для анимации линий
}
let fadeFirstSlide = () => {
    document.querySelector(".slide1__main-container-title").style.cssText = "opacity: 0"; // заг
    document.querySelector(".slide1__main-container-text").style.cssText = "opacity: 0"; // текст справа от зага
    document.querySelector(".slide1__main-container-line").style.cssText = "opacity: 0"; // полоска около зага
    document.querySelector(".slide1__title-container").style.cssText = "opacity: 0"; // подзаг
    document.querySelector(".slide1_layer3__line-container").style.cssText = "opacity: 0"; // кружки с пульсацией
    document.querySelector(".slide1_layer4__info-container").style.cssText = "opacity: 0"; // подзаг - слой для обработки быстрого появления
    document.querySelector(".slide1_layer5__line").classList.remove("animation__line-slide1"); // для анимации линий	
    document.querySelector(".slide1_layer5__line").classList.remove("animation__move-img-slide1"); // для анимации линий
}
let fadeSecondSlide = () => {
    document.querySelector(".tree-image-intern").style.opacity = 0; // дерево
    document.querySelector(".slide2__top-container-line").style.cssText = "opacity: 0"; // полоска около зага
    document.querySelector(".slide2__top-container-title").style.cssText = "opacity: 0"; // заг	
    document.querySelector(".slide2__circle-img").style.cssText = "opacity: 0"; // кружок с пульсацией
    document.querySelector(".slide2__circle-gif").style.cssText = "opacity: 0"; // пульсация
    document.querySelector(".slide2__main-col-left").style.cssText = "opacity: 0"; // левая колонка
    document.querySelector(".slide2__main-col-right").style.cssText = "opacity: 0"; // правая колонка
    document.querySelector(".slide2_layer2__line").style.cssText = "opacity: 0"; // линия вертикальная
    document.querySelector(".slide2__root1-intern").style.cssText = "opacity: 0"; // корень 1
    document.querySelector(".slide2__root2-intern").style.cssText = "opacity: 0"; // корень 2
    document.querySelector(".slide2__root3-intern").style.cssText = "opacity: 0"; // корень 3	
    document.querySelector(".slide2__root1-back").style.cssText = "opacity: 0"; // корень-бэк
    document.querySelector(".slide2__root1-intern").classList.remove("animation__move-img2"); // для анимации корней
    document.querySelector(".slide2__dot-seven-pulse").classList.remove("animation-dot-pulse"); // анимация точки 7
    document.querySelector(".slide2__dot-eight-pulse").classList.remove("animation-dot-pulse"); // анимация точки 8
    document.querySelector(".slide2__dot-nine-pulse").classList.remove("animation-dot-pulse"); // анимация точки 9
    document.querySelector(".slide2__dot-eleven-pulse").classList.remove("animation-dot-pulse"); // анимация точки 11
    document.querySelector(".slide2__dot-twelve-pulse").classList.remove("animation-dot-pulse"); // анимация точки 12
    document.querySelector(".slide2__dot-thirteen-pulse").classList.remove("animation-dot-pulse"); // анимация точки 13
}
let fadeThirdSlide = () => {
    document.querySelector(".tree-image-junior").style.opacity = 0; // дерево	
    document.querySelector(".slide3__poly").style.opacity = 0; // пентагон
    document.querySelector(".slide3__root1-junior").style.cssText = "opacity: 0"; // корень 1
    document.querySelector(".slide3__root2-junior").style.cssText = "opacity: 0"; // корень 2
    document.querySelector(".slide3__root1-back").style.cssText = "opacity: 0"; // корень-бэк
    document.querySelector(".slide3__top-container-line").style.cssText = "opacity: 0"; // полоска около зага
    document.querySelector(".slide3__top-container-title").style.cssText = "opacity: 0"; // заг
    document.querySelector(".slide3__main").style.cssText = "opacity: 0"; // правая колонка
    document.querySelector(".slide3__bigdot-two-pulse").classList.remove("animation-bigdot-pulse"); // анимация точки 2
    document.querySelector(".slide3__bigdot-three-pulse").classList.remove("animation-bigdot-pulse"); // анимация точки 3
    document.querySelector(".slide3__bigdot-four-pulse").classList.remove("animation-bigdot-pulse"); // анимация точки 4
    document.querySelector(".slide3__dot-five-pulse").classList.remove("animation-dot-pulse"); // анимация точки 5
    document.querySelector(".slide3__root1-junior").classList.remove("animation__move-img3"); // для анимации корней
}
let fadeFourthSlide = () => {
    document.querySelector(".slide4__root1-middle").style.cssText = "opacity: 0"; // корень 1
    document.querySelector(".slide4__root2-middle").style.cssText = "opacity: 0"; // корень 2
    document.querySelector(".slide4__root1-back").style.cssText = "opacity: 0"; // корень-бэк
    document.querySelector(".slide4__top-container-line").style.cssText = "opacity: 0"; // полоска около зага
    document.querySelector(".slide4__top-container-title").style.cssText = "opacity: 0"; // заг
    document.querySelector(".slide4__main").style.cssText = "opacity: 0"; // колонка
    document.querySelector(".slide4_layer2__line").style.cssText = "opacity: 0"; // линия вертикальная
    document.querySelector(".slide4__dot-five-pulse").classList.remove("animation-dot-pulse"); // анимация точки 5
    document.querySelector(".slide4__dot-six-pulse").classList.remove("animation-dot-pulse"); // анимация точки 6
    document.querySelector(".slide4__dot-seven-pulse").classList.remove("animation-dot-pulse"); // анимация точки 7
    document.querySelector(".slide4__root1-middle").classList.remove("animation__move-img4"); // для анимации корней
}
let fadeFifthSlide = () => {
    document.querySelector(".slide5__root1-middle").style.cssText = "opacity: 0"; // корень 1
    document.querySelector(".slide5__root2-middle").style.cssText = "opacity: 0"; // корень 2
    document.querySelector(".slide5__root1-back").style.cssText = "opacity: 0"; // корень-бэк
    document.querySelector(".slide5__poly").style.opacity = 0; // пентагон
    document.querySelector(".slide5_layer2__line").style.cssText = "opacity: 0"; // линия вертикальная
    document.querySelector(".slide5_layer2__circle-arrow-one").style.cssText = "opacity: 0"; // стрелка в кружке 1
    document.querySelector(".slide5_layer2__circle-arrow-two").style.cssText = "opacity: 0"; // стрелка в кружке 2
    document.querySelector(".slide5__main").style.cssText = "opacity: 0"; // колонка	
    document.querySelector(".slide5__circle-img").style.cssText = "opacity: 0"; // кружок с пульсацией
    document.querySelector(".slide5__circle-gif").style.cssText = "opacity: 0"; // пульсация
    document.querySelector(".slide5__bigdot-two-pulse").classList.remove("animation-bigdot-pulse"); // анимация точки 2
    document.querySelector(".slide5__bigdot-three-pulse").classList.remove("animation-bigdot-pulse"); // анимация точки 3
    document.querySelector(".slide5__bigdot-four-pulse").classList.remove("animation-bigdot-pulse"); // анимация точки 4
    document.querySelector(".slide5__bigdot-five-pulse").classList.remove("animation-bigdot-pulse"); // анимация точки 5
    document.querySelector(".slide5__root1-middle").classList.remove("animation__move-img5"); // для анимации корней
}
let fadeSixthSlide = () => {
    document.querySelector(".slide6__root1-senior").style.cssText = "opacity: 0"; // корень 1
    document.querySelector(".slide6__root2-senior").style.cssText = "opacity: 0"; // корень 2
    document.querySelector(".slide6__root1-back").style.cssText = "opacity: 0"; // корень-бэк
    document.querySelector(".slide6__poly").style.opacity = 0; // пентагон
    document.querySelector(".slide6_layer2__line").style.cssText = "opacity: 0"; // линия вертикальная
    document.querySelector(".slide6_layer2__circle-arrow-one").style.cssText = "opacity: 0"; // стрелка в кружке 1
    document.querySelector(".slide6_layer2__circle-arrow-two").style.cssText = "opacity: 0"; // стрелка в кружке 2
    document.querySelector(".slide6__main").style.cssText = "opacity: 0"; // колонка	
    document.querySelector(".slide6__top-container-line").style.cssText = "opacity: 0"; // полоска около зага
    document.querySelector(".slide6__top-container-title").style.cssText = "opacity: 0"; // заг
    document.querySelector(".slide6__circle-img").style.cssText = "opacity: 0"; // кружок с пульсацией
    document.querySelector(".slide6__circle-gif").style.cssText = "opacity: 0"; // пульсация
    document.querySelector(".slide6__bigdot-three-pulse").classList.remove("animation-bigdot-pulse"); // анимация точки 3
    document.querySelector(".slide6__bigdot-four-pulse").classList.remove("animation-bigdot-pulse"); // анимация точки 4
    document.querySelector(".slide6__bigdot-five-pulse").classList.remove("animation-bigdot-pulse"); // анимация точки 5
    document.querySelector(".slide6__root1-senior").classList.remove("animation__move-img6"); // для анимации корней
}
let fadeSeventhSlide = () => {
    document.querySelector(".slide7__root1-senior").style.cssText = "opacity: 0"; // корень 1
    document.querySelector(".slide7__root2-senior").style.cssText = "opacity: 0"; // корень 2
    document.querySelector(".slide7__root1-back").style.cssText = "opacity: 0"; // корень-бэк
    document.querySelector(".slide7_layer3__nuts").style.cssText = "opacity: 0"; // желуди
    document.querySelector(".slide7__poly").style.opacity = 0; // пентагон левый
    document.querySelector(".slide7__poly2").style.opacity = 0; // пентагон правый
    document.querySelector(".slide7__main").style.cssText = "opacity: 0"; // колонка	
    document.querySelector(".slide7__top-container-line").style.cssText = "opacity: 0"; // полоска около зага
    document.querySelector(".slide7__top-container-title").style.cssText = "opacity: 0"; // заг
    document.querySelector(".slide7__dot-left-pulse").classList.remove("animation-dot2-pulse"); // анимация точки 
    document.querySelector(".slide7__dot-right-pulse").classList.remove("animation-dot2-pulse"); // анимация точки 
    document.querySelector(".slide7__root1-senior").classList.remove("animation__move-img7"); // для анимации корней
}
let fadeEigthSlide = () => {
    document.querySelector(".header-right-main").style.cssText = "display: none"; // ссылка на QR 
    document.querySelector(".header-right-back").style.cssText = "display: none"; // ссылка назад
    document.querySelector(".slide8__root1-senior").style.cssText = "opacity: 0"; // корень 1
    document.querySelector(".slide8__root2-senior").style.cssText = "opacity: 0"; // корень 2
    document.querySelector(".slide8__root1-back").style.cssText = "opacity: 0"; // корень-бэк
    document.querySelector(".header-main").style.cssText = "z-index: 100"; // хэдер
    document.querySelector(".slide8_topline").style.cssText = "opacity: 0"; // полоса под хедером
    document.querySelector(".slide8__poly").style.opacity = 0; // пентагон
    document.querySelector(".slide8_layer3__nuts").style.cssText = "opacity: 0"; // желудь
    document.querySelector(".slide8_layer3__leaf3").style.cssText = "opacity: 0"; // левый лист
    document.querySelector(".slide8__root1-senior").classList.remove("animation__move-img8"); // для анимации корней
    document.querySelector(".slide8__main-left").style.cssText = "opacity: 0"; // левая 
    document.querySelector(".slide8__text-left").style.cssText = "transform: translate3d(0, 0, 0px);backdrop-filter: blur(0px) opacity(0);background-color: rgba(255, 255, 255, 0);"; // левая блюр
    document.querySelector(".slide8__main-right").style.cssText = "opacity: 0"; // правая 
    document.querySelector(".slide8__text-right").style.cssText = "transform: translate3d(0, 0, 0px);backdrop-filter: blur(0px) opacity(0);background-color: rgba(255, 255, 255, 0);"; // правая блюр
}
let changeWithDirection = function () {
    let currentSlide = window.localStorage.getItem("activeSlide");
    if (currentSlide !== "2" && currentSlide !== "3" && currentSlide !== "4" && currentSlide !== "5" && currentSlide !== "6") {
        document.querySelector(".title-container").style.cssText = "opacity: 0"; // подзаг
    }
    if (currentSlide !== "2") {
        document.querySelector(".slide2__bottom-container").style.cssText = "opacity: 0; z-index: 0"; // кнопка
    }
    if (currentSlide !== "3") {
        document.querySelector(".slide3__bottom-container").style.cssText = "opacity: 0; z-index: 0"; // кнопка
    }
    if (currentSlide !== "4" && currentSlide !== "5") {
        document.querySelector(".slide4__bottom-container").style.cssText = "opacity: 0; z-index: 0"; // кнопка
    }
    if (currentSlide !== "6") {
        document.querySelector(".slide6__bottom-container").style.cssText = "opacity: 0; z-index: 0"; // кнопка
    }
    if (currentSlide !== "4" && currentSlide !== "5") {
        document.querySelector(".tree-image-middle").style.cssText = "opacity: 0"; // дерево
    }
    if (currentSlide !== "6" && currentSlide !== "7" && currentSlide !== "8") {
        document.querySelector(".tree-image-senior").style.cssText = "opacity: 0"; // дерево
    }
    if (currentSlide == "2") {
        document.querySelector(".title-year").classList.remove("title-year1"); // год - счетчик
        document.querySelector(".title-year").classList.remove("title-year2"); // год - счетчик
        document.querySelector(".title-year").classList.remove("title-year3"); // год - счетчик
    }
    if (currentSlide == "3") {
        document.querySelector(".title-year").classList.remove("title-year2"); // год - счетчик
        document.querySelector(".title-year").classList.remove("title-year3"); // год - счетчик
        document.querySelector(".title-year").classList.add("title-year1"); // год - счетчик
    }
    if (currentSlide == "4" || currentSlide == "5") {
        document.querySelector(".title-year").classList.remove("title-year1"); // год - счетчик
        document.querySelector(".title-year").classList.remove("title-year3"); // год - счетчик
        document.querySelector(".title-year").classList.add("title-year2"); // год - счетчик
    }
    if (currentSlide == "6") {
        document.querySelector(".title-year").classList.remove("title-year1"); // год - счетчик
        document.querySelector(".title-year").classList.remove("title-year2"); // год - счетчик
        document.querySelector(".title-year").classList.add("title-year3"); // год - счетчик
    }
}
window.onload = function () {
    document.querySelector(".swiper-button-next").style.opacity = 0;
    document.querySelector(".swiper-button-prev").style.opacity = 0;
    window.localStorage.setItem("activeSlide", "0");
    renderZeroSlide();
    deletePopups();
    renderPlayScroll();
};
let changeStart = function () {
    const swiper = document.querySelector('.swiper').swiper;
    const bar = document.querySelector(".swiper-scrollbar-drag");
    renderPlayScroll();
    bar.className = "swiper-scrollbar-drag";
    const screenWidth = window.outerWidth;
    if (screenWidth <= 1920) { // для экранов менее 1920рх	
        if (swiper.activeIndex == 0) {
            bar.style.transform = "translate3d(0px, 0px, 0px)"
        } else if (swiper.activeIndex == 1) {
            bar.style.transform = "translate3d(0px, 0px, 0px)"
        } else if (swiper.activeIndex == 2) {
            bar.style.transform = "translate3d(80px, 0px, 0px)"
        } else if (swiper.activeIndex == 3) {
            bar.style.transform = "translate3d(320px, 0px, 0px)"
        } else if (swiper.activeIndex == 4) {
            bar.style.transform = "translate3d(560px, 0px, 0px)"
        } else if (swiper.activeIndex == 5) {
            bar.style.transform = "translate3d(600px, 0px, 0px)"
        } else if (swiper.activeIndex == 6) {
            bar.style.transform = "translate3d(880px, 0px, 0px)"
        } else if (swiper.activeIndex == 7) {
            bar.style.transform = "translate3d(1000px, 0px, 0px)"
        } else if (swiper.activeIndex == 8) {
            bar.style.transform = "translate3d(1092px, 0px, 0px)"
        }
    } else {
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
            bar.style.transform = "translate3d(1250px, 0px, 0px)"
        } else if (swiper.activeIndex == 8) {
            bar.style.transform = "translate3d(1366px, 0px, 0px)"
        }
    }
    fadeCurrentSlide();
}
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
let fadeCurrentSlide = function () {
    let currentSlide = window.localStorage.getItem("activeSlide");
    if (currentSlide == "0") {
        fadeFirstSlide();
        fadeSecondSlide();
        fadeThirdSlide();
        fadeFourthSlide();
        fadeFifthSlide();
        fadeSixthSlide();
        fadeSeventhSlide();
        fadeEigthSlide();
    }
    if (currentSlide == "1") {
        fadeZeroSlide();
        fadeSecondSlide();
        fadeThirdSlide();
        fadeFourthSlide();
        fadeFifthSlide();
        fadeSixthSlide();
        fadeSeventhSlide();
        fadeEigthSlide();
    }
    if (currentSlide == "2") {
        fadeZeroSlide();
        fadeFirstSlide();
        fadeThirdSlide();
        fadeFourthSlide();
        fadeFifthSlide();
        fadeSixthSlide();
        fadeSeventhSlide();
        fadeEigthSlide();
    }
    if (currentSlide == "3") {
        fadeZeroSlide();
        fadeFirstSlide();
        fadeSecondSlide();
        fadeFourthSlide();
        fadeFifthSlide();
        fadeSixthSlide();
        fadeSeventhSlide();
        fadeEigthSlide();
    }
    if (currentSlide == "4") {
        fadeZeroSlide();
        fadeFirstSlide();
        fadeSecondSlide();
        fadeThirdSlide();
        fadeFifthSlide();
        fadeSixthSlide();
        fadeSeventhSlide();
        fadeEigthSlide();
    }
    if (currentSlide == "5") {
        fadeZeroSlide();
        fadeFirstSlide();
        fadeSecondSlide();
        fadeThirdSlide();
        fadeFourthSlide();
        fadeSixthSlide();
        fadeSeventhSlide();
        fadeEigthSlide();
    }
    if (currentSlide == "6") {
        fadeZeroSlide();
        fadeFirstSlide();
        fadeSecondSlide();
        fadeThirdSlide();
        fadeFourthSlide();
        fadeFifthSlide();
        fadeSeventhSlide();
        fadeEigthSlide();
    }
    if (currentSlide == "7") {
        fadeZeroSlide();
        fadeFirstSlide();
        fadeSecondSlide();
        fadeThirdSlide();
        fadeFourthSlide();
        fadeFifthSlide();
        fadeSixthSlide();
        fadeEigthSlide();
    }
    if (currentSlide == "8") {
        fadeZeroSlide();
        fadeFirstSlide();
        fadeSecondSlide();
        fadeThirdSlide();
        fadeFourthSlide();
        fadeFifthSlide();
        fadeSixthSlide();
        fadeSeventhSlide();
    }
}
let showNewSlide = function () {
    toggleArrows();
    fadeCurrentSlide();
    document.querySelector(".overlay-qr").classList.remove("overlay-qr-show");
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
        renderFourthSlide();
        document.querySelector('.swiper-scrollbar-drag').innerHTML = "2007";
    }
    if (currentSlide == "5") {
        renderFifthSlide();
        document.querySelector('.swiper-scrollbar-drag').innerHTML = "2007";
    }
    if (currentSlide == "6") {
        renderSixthSlide();
        document.querySelector('.swiper-scrollbar-drag').innerHTML = "2024";
    }
    if (currentSlide == "7") {
        renderSeventhSlide();
        document.querySelector('.swiper-scrollbar-drag').innerHTML = "2024";
    }
    if (currentSlide == "8") {
        renderEigthSlide();
    }
}
let renderPlayScroll = function () {
    document.querySelector('.swiper-scrollbar-drag').innerHTML = "";
    var source = document.createElement('img');
    source.src = 'img/icons/play_scroll.svg';
    var destination = document.querySelector('.swiper-scrollbar-drag');
    destination.appendChild(source);
}
let button2 = document.querySelector(".button_slide2");
button2.addEventListener("click", (e) => {
    document.querySelector(".slide2__popup-container").style.visibility = "visible";
    document.querySelector(".slide2__popup-container").style.opacity = "1";
    document.querySelector(".slide2__button-arrow").style.display = "none";
    document.querySelector(".slide2__button-arrow-wh").style.display = "block";
    document.querySelector(".button_slide2").classList.add("button_pressed");
    document.querySelector(".overlay").classList.add("overlay-show");
});
let hidePopup2 = () => {
    document.querySelector(".slide2__popup-container").style.visibility = "hidden";
    document.querySelector(".slide2__popup-container").style.opacity = "0";
    document.querySelector(".slide2__button-arrow").style.display = "block";
    document.querySelector(".slide2__button-arrow-wh").style.display = "none";
    document.querySelector(".button_slide2").classList.remove("button_pressed");
    document.querySelector(".overlay").classList.remove("overlay-show");
}
let button3 = document.querySelector(".button_slide3");
button3.addEventListener("click", (e) => {
    document.querySelector(".slide3__popup-container").style.visibility = "visible";
    document.querySelector(".slide3__popup-container").style.opacity = "1";
    document.querySelector(".slide3__button-arrow").style.display = "none";
    document.querySelector(".slide3__button-arrow-wh").style.display = "block";
    document.querySelector(".button_slide3").classList.add("button_pressed");
    document.querySelector(".overlay").classList.add("overlay-show");
});
let hidePopup3 = () => {
    document.querySelector(".slide3__popup-container").style.visibility = "hidden";
    document.querySelector(".slide3__popup-container").style.opacity = "0";
    document.querySelector(".slide3__button-arrow").style.display = "block";
    document.querySelector(".slide3__button-arrow-wh").style.display = "none";
    document.querySelector(".button_slide3").classList.remove("button_pressed");
    document.querySelector(".overlay").classList.remove("overlay-show");
}
let button4 = document.querySelector(".button_slide4");
button4.addEventListener("click", (e) => {
    document.querySelector(".slide4__popup-container").style.visibility = "visible";
    document.querySelector(".slide4__popup-container").style.opacity = "1";
    document.querySelector(".slide4__button-arrow").style.display = "none";
    document.querySelector(".slide4__button-arrow-wh").style.display = "block";
    document.querySelector(".button_slide4").classList.add("button_pressed");
    document.querySelector(".overlay").classList.add("overlay-show");
});
let hidePopup4 = () => {
    document.querySelector(".slide4__popup-container").style.visibility = "hidden";
    document.querySelector(".slide4__popup-container").style.opacity = "0";
    document.querySelector(".slide4__button-arrow").style.display = "block";
    document.querySelector(".slide4__button-arrow-wh").style.display = "none";
    document.querySelector(".button_slide4").classList.remove("button_pressed");
    document.querySelector(".overlay").classList.remove("overlay-show");
}
let button6 = document.querySelector(".button_slide6");
button6.addEventListener("click", (e) => {
    document.querySelector(".slide6__popup-container").style.visibility = "visible";
    document.querySelector(".slide6__popup-container").style.opacity = "1";
    document.querySelector(".slide6__button-arrow").style.display = "none";
    document.querySelector(".slide6__button-arrow-wh").style.display = "block";
    document.querySelector(".button_slide6").classList.add("button_pressed");
    document.querySelector(".overlay").classList.add("overlay-show");
});
let hidePopup6 = () => {
    document.querySelector(".slide6__popup-container").style.visibility = "hidden";
    document.querySelector(".slide6__popup-container").style.opacity = "0";
    document.querySelector(".slide6__button-arrow").style.display = "block";
    document.querySelector(".slide6__button-arrow-wh").style.display = "none";
    document.querySelector(".button_slide6").classList.remove("button_pressed");
    document.querySelector(".overlay").classList.remove("overlay-show");
}
let openbox = (id) => {
    document.getElementById(id).style.display = 'block';
    let img = document.querySelector(`.` + id + `-img`);
    let imghover = document.querySelector(`.` + id + `-img-hover`);
    let circle = document.querySelector(`.` + id + `-circle`);
    img.style.opacity = "0";
    imghover.style.opacity = "1";
    circle.classList.add("circle-clicked");
}
let openqr = () => {
    document.querySelector(".header-right-main").style.display = 'none';
    document.querySelector(".header-right-back").style.display = 'flex';
    document.querySelector(".overlay-qr").classList.add("overlay-qr-show");
}
let closeqr = () => {
    document.querySelector(".header-right-main").style.display = 'flex';
    document.querySelector(".header-right-back").style.display = 'none';
    document.querySelector(".overlay-qr").classList.remove("overlay-qr-show");
}
let deletePopups = () => {
    hidePopup2();
    hidePopup3();
    hidePopup4();
    hidePopup6();
    document.getElementById("box1").style.display = 'none';
    document.getElementById("box2").style.display = 'none';
    document.getElementById("box3").style.display = 'none';
    document.getElementById("box4").style.display = 'none';
    document.querySelector(".box1-img").style.opacity = "1";
    document.querySelector(".box1-img-hover").style.opacity = "0";
    document.querySelector(".box1-circle").classList.remove("circle-clicked");
    document.querySelector(".box2-img").style.opacity = "1";
    document.querySelector(".box2-img-hover").style.opacity = "0";
    document.querySelector(".box2-circle").classList.remove("circle-clicked");
    document.querySelector(".box3-img").style.opacity = "1";
    document.querySelector(".box3-img-hover").style.opacity = "0";
    document.querySelector(".box3-circle").classList.remove("circle-clicked");
    document.querySelector(".box4-img").style.opacity = "1";
    document.querySelector(".box4-img-hover").style.opacity = "0";
    document.querySelector(".box4-circle").classList.remove("circle-clicked");
}
document.addEventListener('mouseup', () => {
    deletePopups();
})