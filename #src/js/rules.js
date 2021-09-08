


//ВТОРОЙ СПОСОБ НАВЕСИТЬ КЛАСС ПРИ ПРОКРУТКЕ
// window.addEventListener('scroll', () => {
// 	let scrollDistance = window.scrollY;

// 	// if (window.innerWidth > 768) {
// 		document.querySelectorAll('.dl-section').forEach((el, i) => {
// 			if (el.offsetTop - document.querySelector('.dl-page-nav').clientHeight <= scrollDistance) {
// 				document.querySelectorAll('.dl-page-nav a').forEach((el) => {
// 					if (el.classList.contains('dl-active')) {
// 						el.classList.remove('dl-active');
// 					}
// 				});

// 				document.querySelectorAll('.dl-page-nav li')[i].querySelector('a').classList.add('dl-active');
// 			}
// 		});
// 	// }
// });

//-----------------------
const accordeons = document.querySelectorAll('.dl-info-tabs-item__title');
const replacementIcon = document.querySelectorAll('.dl-section__open-btn');

function headerClick () {
    console.log(this);
    console.log(this.parentElement);
    this.parentElement.classList.toggle('dl-open');
    this.parentElement.querySelector('.dl-section__open-btn').classList.toggle('dl-section__open-btn__del-after');
    this.preventDefault()
};
accordeons.forEach(el => {
    el.addEventListener('click', headerClick);
})
    
//------
// let scrollValue = document.getElementsByClassName("dl-grid-block")[0];   
// let bot = document.getElementsByClassName("header-mobile")[0];    
		
// 	 window.addEventListener('scroll', function() {
// 	  if (bot.classList.contains("header-mobile--hide")) {
// 	  scrollValue.style.top='0px'
// 	}
// 		else{
// 		  scrollValue.style.top= bot.offsetHeight + 'px';
// 		}
// 	});    	
//------