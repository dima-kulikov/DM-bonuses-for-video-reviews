
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
//---- часть работы с моб восприятием... вкл/выкл при появлении видео 

//////-----
const visibleArea = document.querySelector('#scrolling-box')
const target = document.querySelector('#part-scroll')

visibleArea.addEventListener('wheel', event => {
  const toLeft  = event.deltaY < 0 && target.scrollLeft > 0
  const toRight = event.deltaY > 0 && target.scrollLeft < target.scrollWidth - target.clientWidth

  if (toLeft || toRight) {
    event.preventDefault()
    target.scrollLeft += event.deltaY
  }
})


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
    
//------СКРОЛ ВЛЕВО
const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
const blockSize = document.querySelector('.sample-card');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
console.log(blockSize)
function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const pp = blockSize.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh+vw/3;
//   return objectWidth + blockSize.innerHeight*4;
  // return objectWidth - 700;
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  console.log( `translateX(-${sticky.offsetTop}px)`);
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
}); 
    // --------СКРОЛ ВЛЕВО КОНЕЦ
    $.ajax({
      url: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
      dataType: "script",
      success: function() {
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
          breakpoint: 1048,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2.2,
            arrows: false
            
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2.2,
            arrows: false

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.2,
            arrows: false

          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1.7,
            arrows: false

          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1.5,
            arrows: false

          }
        }
      ]
    });
    // ----------------
      }
    });
    

// })