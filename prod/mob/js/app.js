function scrollTo(e,o=700){const p=document.scrollingElement||document.documentElement,t=p.scrollTop,c=e-t,u=+new Date,n=function(){const l=+new Date-u;var s,r,a;p.scrollTop=parseInt((s=l,r=t,a=c,(s/=o/2)<1?a/2*s*s+r:-a/2*(--s*(s-2)-1)+r)),l<o?requestAnimationFrame(n):p.scrollTop=e};n()}let btnUp=document.querySelector("#toTop");btnUp.onclick=function(e){e.preventDefault(),scrollTo(0,400)};let popupBg1=document.querySelector(".popupGr__bg1"),popup1=document.querySelector(".popupGr1"),closePopupButton1=document.querySelector(".close-popupGr1"),openPopupButton1=document.querySelector("#graphics1");openPopupButton1.addEventListener("click",(e=>{e.preventDefault(),popupBg1.classList.add("active"),popup1.classList.add("active")})),closePopupButton1.addEventListener("click",(()=>{popupBg1.classList.remove("active"),popup1.classList.remove("active")}));let popupBg2=document.querySelector(".popupGr__bg2"),popup2=document.querySelector(".popupGr2"),closePopupButton2=document.querySelector(".close-popupGr2"),openPopupButton2=document.querySelector("#graphics2");openPopupButton2.addEventListener("click",(e=>{e.preventDefault(),popupBg2.classList.add("active"),popup2.classList.add("active")})),closePopupButton2.addEventListener("click",(()=>{popupBg2.classList.remove("active"),popup2.classList.remove("active")}));let popupBg3=document.querySelector(".popupGr__bg3"),popup3=document.querySelector(".popupGr3"),closePopupButton3=document.querySelector(".close-popupGr3"),openPopupButton3=document.querySelector("#graphics3");openPopupButton3.addEventListener("click",(e=>{e.preventDefault(),popupBg3.classList.add("active"),popup3.classList.add("active")})),closePopupButton3.addEventListener("click",(()=>{popupBg3.classList.remove("active"),popup3.classList.remove("active")}));let popupBg4=document.querySelector(".popupGr__bg4"),popup4=document.querySelector(".popupGr4"),closePopupButton4=document.querySelector(".close-popupGr4"),openPopupButton4=document.querySelector("#graphics4");openPopupButton4.addEventListener("click",(e=>{e.preventDefault(),popupBg4.classList.add("active"),popup4.classList.add("active")})),closePopupButton4.addEventListener("click",(()=>{popupBg4.classList.remove("active"),popup4.classList.remove("active")}));let popupBg1977=document.querySelector(".popupFacts__bg1977"),popup1977=document.querySelector(".popupFacts1977"),closePopupButton1977=document.querySelector(".close-popupFacts1977"),openPopupButton1977=document.querySelector("#btn1977");openPopupButton1977.addEventListener("click",(e=>{e.preventDefault(),popupBg1977.classList.add("active"),popup1977.classList.add("active")})),closePopupButton1977.addEventListener("click",(()=>{popupBg1977.classList.remove("active"),popup1977.classList.remove("active")}));let popupBg1997=document.querySelector(".popupFacts__bg1997"),popup1997=document.querySelector(".popupFacts1997"),closePopupButton1997=document.querySelector(".close-popupFacts1997"),openPopupButton1997=document.querySelector("#btn1997");openPopupButton1997.addEventListener("click",(e=>{e.preventDefault(),popupBg1997.classList.add("active"),popup1997.classList.add("active")})),closePopupButton1997.addEventListener("click",(()=>{popupBg1997.classList.remove("active"),popup1997.classList.remove("active")}));let popupBg2007=document.querySelector(".popupFacts__bg2007"),popup2007=document.querySelector(".popupFacts2007"),closePopupButton2007=document.querySelector(".close-popupFacts2007"),openPopupButton2007=document.querySelector("#btn2007");openPopupButton2007.addEventListener("click",(e=>{e.preventDefault(),popupBg2007.classList.add("active"),popup2007.classList.add("active")})),closePopupButton2007.addEventListener("click",(()=>{popupBg2007.classList.remove("active"),popup2007.classList.remove("active")}));let popupBgMenu=document.querySelector(".popupMenu__bg"),popupMenu=document.querySelector(".popupMenu"),closePopupButtonMenu=document.querySelector(".close-popupMenu"),openPopupButtonMenu=document.querySelector("#menu"),openPopupButtonMenu2=document.querySelector("#menuBottom");function closeItems(){document.querySelector("#dropdown1").className="qr-close",document.querySelector("#dropdown2").className="qr-close",document.querySelector("#dropdown3").className="qr-close",document.querySelector("#dropdown4").className="qr-close",document.querySelector("#dropdown5").className="qr-close"}function inActive(){document.querySelector("#qr1").className="popupMenu__link popupMenu__link1",document.querySelector("#qr2").className="popupMenu__link popupMenu__link1",document.querySelector("#qr3").className="popupMenu__link popupMenu__link1",document.querySelector("#qr4").className="popupMenu__link popupMenu__link2",document.querySelector("#qr5").className="popupMenu__link popupMenu__link3"}openPopupButtonMenu2.addEventListener("click",(e=>{e.preventDefault(),popupBgMenu.classList.add("active"),popupMenu.classList.add("active")})),openPopupButtonMenu.addEventListener("click",(e=>{e.preventDefault(),popupBgMenu.classList.add("active"),popupMenu.classList.add("active")})),closePopupButtonMenu.addEventListener("click",(()=>{popupBgMenu.classList.remove("active"),popupMenu.classList.remove("active")}));let accHD1=document.querySelector("#qr1");function toggleItem1(){closeItems(),inActive(),document.querySelector("#dropdown1").className="qr-open",accHD1.className="popupMenu__link popupMenu__link1 active"}accHD1.addEventListener("click",toggleItem1,!1);let accHD2=document.querySelector("#qr2");function toggleItem2(){closeItems(),inActive(),document.querySelector("#dropdown2").className="qr-open",accHD2.className="popupMenu__link popupMenu__link1 active"}accHD2.addEventListener("click",toggleItem2,!1);let accHD3=document.querySelector("#qr3");function toggleItem3(){closeItems(),inActive(),document.querySelector("#dropdown3").className="qr-open",accHD3.className="popupMenu__link popupMenu__link1 active"}accHD3.addEventListener("click",toggleItem3,!1);let accHD4=document.querySelector("#qr4");function toggleItem4(){closeItems(),inActive(),document.querySelector("#dropdown4").className="qr-open",accHD4.className="popupMenu__link popupMenu__link2 active"}accHD4.addEventListener("click",toggleItem4,!1);let accHD5=document.querySelector("#qr5");function toggleItem5(){closeItems(),inActive(),document.querySelector("#dropdown5").className="qr-open",accHD5.className="popupMenu__link popupMenu__link3 active"}accHD5.addEventListener("click",toggleItem5,!1);