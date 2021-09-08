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

