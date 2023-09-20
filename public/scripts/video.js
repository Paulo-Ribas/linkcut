const Video = document.getElementById('video')

addEventListener('scroll', () => {
    if (scrollY >= 740) {
        Video.play()

    }


})