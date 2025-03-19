/* кнопка "вверх" */ 
function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

let btnUp = document.querySelector('#toTop');

btnUp.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 400);
}

/* ссылки на графики */
let popupBg1 = document.querySelector('.popupGr__bg1');
let popup1 = document.querySelector('.popupGr1');
let closePopupButton1 = document.querySelector('.close-popupGr1');
let openPopupButton1 = document.querySelector('#graphics1');

openPopupButton1.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg1.classList.add('active');
    popup1.classList.add('active');
})

closePopupButton1.addEventListener('click',() => {
    popupBg1.classList.remove('active');
    popup1.classList.remove('active');
});

let popupBg2 = document.querySelector('.popupGr__bg2');
let popup2 = document.querySelector('.popupGr2');
let closePopupButton2 = document.querySelector('.close-popupGr2');
let openPopupButton2 = document.querySelector('#graphics2');

openPopupButton2.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg2.classList.add('active');
    popup2.classList.add('active');
})

closePopupButton2.addEventListener('click',() => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
});

let popupBg3 = document.querySelector('.popupGr__bg3');
let popup3 = document.querySelector('.popupGr3');
let closePopupButton3 = document.querySelector('.close-popupGr3');
let openPopupButton3 = document.querySelector('#graphics3');

openPopupButton3.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg3.classList.add('active');
    popup3.classList.add('active');
})

closePopupButton3.addEventListener('click',() => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
});


let popupBg4 = document.querySelector('.popupGr__bg4');
let popup4 = document.querySelector('.popupGr4');
let closePopupButton4 = document.querySelector('.close-popupGr4');
let openPopupButton4 = document.querySelector('#graphics4');

openPopupButton4.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg4.classList.add('active');
    popup4.classList.add('active');
})

closePopupButton4.addEventListener('click',() => {
    popupBg4.classList.remove('active');
    popup4.classList.remove('active');
});

/* кнопки "интересные факты" */
let popupBg1977 = document.querySelector('.popupFacts__bg1977');
let popup1977 = document.querySelector('.popupFacts1977');
let closePopupButton1977 = document.querySelector('.close-popupFacts1977');
let openPopupButton1977 = document.querySelector('#btn1977');

openPopupButton1977.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg1977.classList.add('active');
    popup1977.classList.add('active');
})

closePopupButton1977.addEventListener('click',() => {
    popupBg1977.classList.remove('active');
    popup1977.classList.remove('active');
});

let popupBg1997 = document.querySelector('.popupFacts__bg1997');
let popup1997 = document.querySelector('.popupFacts1997');
let closePopupButton1997 = document.querySelector('.close-popupFacts1997');
let openPopupButton1997 = document.querySelector('#btn1997');

openPopupButton1997.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg1997.classList.add('active');
    popup1997.classList.add('active');
})

closePopupButton1997.addEventListener('click',() => {
    popupBg1997.classList.remove('active');
    popup1997.classList.remove('active');
});

let popupBg2007 = document.querySelector('.popupFacts__bg2007');
let popup2007 = document.querySelector('.popupFacts2007');
let closePopupButton2007 = document.querySelector('.close-popupFacts2007');
let openPopupButton2007 = document.querySelector('#btn2007');

openPopupButton2007.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg2007.classList.add('active');
    popup2007.classList.add('active');
})

closePopupButton2007.addEventListener('click',() => {
    popupBg2007.classList.remove('active');
    popup2007.classList.remove('active');
});

/* кнопка меню */
let popupBgMenu = document.querySelector('.popupMenu__bg');
let popupMenu = document.querySelector('.popupMenu');
let closePopupButtonMenu = document.querySelector('.close-popupMenu');
let openPopupButtonMenu = document.querySelector('#menu');
let openPopupButtonMenu2 = document.querySelector('#menuBottom');

openPopupButtonMenu2.addEventListener('click', (e) => {
    e.preventDefault();
    popupBgMenu.classList.add('active');
    popupMenu.classList.add('active');
})

openPopupButtonMenu.addEventListener('click', (e) => {
    e.preventDefault();
    popupBgMenu.classList.add('active');
    popupMenu.classList.add('active');
})

closePopupButtonMenu.onclick = function (click) {
    popupBgMenu.classList.remove('active');
    popupMenu.classList.remove('active');
}


/* qr в меню */
document.querySelector("#qr1").onclick = function () {
    window.open('https://grls.rosminzdrav.ru/Grls_View_v2.aspx?routingGuid=ff7871a3-ae1a-47ee-b6a7-ecc5d47a6cf6', '_blank');
};

document.querySelector("#qr2").onclick = function () {
    window.open('https://grls.rosminzdrav.ru/Grls_View_v2.aspx?routingGuid=07c4bb17-f61e-40e5-96e9-5575e668c577', '_blank');
};

document.querySelector("#qr3").onclick = function () {
    window.open('https://grls.rosminzdrav.ru/Grls_View_v2.aspx?routingGuid=f8d18099-d073-45fb-b9a8-b56d9692837d', '_blank');
};

document.querySelector("#qr4").onclick = function () {
    window.open('https://grls.minzdrav.gov.ru/Grls_View_v2.aspx?routingGuid=8aea1ebe-d8e6-4c0a-87a3-66560aa47886', '_blank');
};

document.querySelector("#qr5").onclick = function () {
    window.open('https://grls.minzdrav.gov.ru/Grls_View_v2.aspx?routingGuid=41ea69a0-674d-4994-8fd2-83e77bc22d2f', '_blank');
};

/* quiz */
document.querySelector("#quiz").onclick = function () {
    window.open('https://mrqz.me/quiz_diabet', '_blank');
};