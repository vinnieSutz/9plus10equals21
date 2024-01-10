const video = document.querySelector('.video-div video');
const audio = document.querySelector('.video-div audio')
const button19 = document.createElement('button')
const button21 = document.createElement('button')
const buttonsDiv = document.querySelector('.buttons-div');

video.currentTime = 1.8;

video.addEventListener('click', function handler(e) {
    e.currentTarget.removeEventListener(e.type, handler);
    video.play();

    video.addEventListener('timeupdate', function handler(e) {
        if (video.currentTime >= 3.4) {
            video.pause();
            
            button19.classList.add('answer-button')
            button19.textContent = '19'
        
            button21.classList.add('answer-button')
            button21.textContent = '21'
        
            buttonsDiv.appendChild(button19)
            buttonsDiv.appendChild(button21)
            e.currentTarget.removeEventListener(e.type, handler);
        }
    });

    // time tracker :3
    video.ontimeupdate = () => {
        document.querySelector('p').innerText = video.currentTime;
    }
});

button19.addEventListener('click', () => {
    buttonsDiv.style.display = 'none'
    video.play();
    let mutedVideo = video.addEventListener('timeupdate', () => {
        if (video.currentTime >= 3.9) {
            video.muted = true;
        }
    }) 
    setTimeout(playAudio, 250)
    function playAudio() {
        audio.play();
    }

})
button21.addEventListener('click', () => {
    buttonsDiv.style.display = 'none'
    video.play();
    video.addEventListener('timeupdate', () => {
        if (video.ended) {
            setTimeout(closePage, 200)
            function closePage() {
                window.close();
            }
        }
    })
})