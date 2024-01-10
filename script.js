const video = document.querySelector('.video-div video');
const button19 = document.createElement('button')
const button21 = document.createElement('button')
const buttonsDiv = document.querySelector('.buttons-div');




video.currentTime = 1.8;


video.addEventListener('click', function handler(e) {
    e.currentTarget.removeEventListener(e.type, handler);
    video.play();

    video.addEventListener("timeupdate", () => {
        if(video.currentTime >= 3.4) {
            video.pause();
            button19.classList.add('dom-button', 'answer-19')
            button19.textContent = '19'
        
            button21.classList.add('dom-button', 'answer-21')
            button21.textContent = '21'
        
            buttonsDiv.appendChild(button19)
            buttonsDiv.appendChild(button21)
        }
    });
    
    // time tracker :3
    video.ontimeupdate = () => {
        document.querySelector('p').innerText = video.currentTime;
    }
});




