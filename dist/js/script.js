const videos = document.querySelectorAll(".video");


for (const video of videos) {
    video.addEventListener('mouseover', function() { video.play() }, false);
    video.addEventListener('mouseout', function() { video.pause() }, false);
}

const checkNodeVisibilityInViewPort = (elem, full) => {
    const box = elem.getBoundingClientRect()
    const top = box.top
    const left = box.left
    const bottom = box.bottom
    const right = box.right
    const windowWidth = document.documentElement.clientWidth
    const windowHeight = document.documentElement.clientHeight
    let maxWidth = 0
    let maxHeight = 0
    if (full) {
        maxWidth = right - left
        maxHeight = bottom - top
    }
    return (
        Math.min(windowHeight, bottom) - Math.max(0, top) >= maxHeight &&
        Math.min(windowWidth, right) - Math.max(0, left) >= maxWidth
    )
}

const video1 = document.getElementById('video-id-1');
const video2 = document.getElementById('video-id-2');


window.addEventListener('scroll', () => {
    if (checkNodeVisibilityInViewPort(video1, false) && (checkNodeVisibilityInViewPort(video2, false))) {
        video1.pause()
        video2.pause()
    }
     else if (checkNodeVisibilityInViewPort(video1, true)) { 
        video1.play()
    }
    else if (checkNodeVisibilityInViewPort(video2, false)) {
        video2.play()
    }
    console.log('VIDEO_1', checkNodeVisibilityInViewPort(video1, true))
    console.log('VIDEO_2', checkNodeVisibilityInViewPort(video2, true))
})


const target = document.querySelector('#scrolling-box')

target.addEventListener('wheel', event => {
  const toLeft  = event.deltaY < 0 && target.scrollLeft > 0
  const toRight = event.deltaY > 0 && target.scrollLeft < target.scrollWidth - target.clientWidth

  if (toLeft || toRight) {
    event.preventDefault()
    target.scrollLeft += event.deltaY
  }
})



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
$(document).ready(function(){

    $('.slider__items').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3.5,
          }
        },
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 2.5,
            arrows: false
            
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            arrows: false

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.6,
            arrows: false

          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1.4,
            arrows: false

          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1.3,
            arrows: false

          }
        }
      ]
    });
        });
const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh*1.5;
  // return objectWidth - 700;
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});

console.log('work')