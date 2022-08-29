// =================== MOBILE NAV ===================


// мы должны найти кнопку, чтобы она превращалас в крестик

const mobileNavButton = document.querySelector('.mobile-nav-button')
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon')
const mobileNav = document.querySelector('.mobile-nav')

// теперь когда мы будем делать клик по иконке, мы будем добавлять к ней класс active. Для этого мы обращаемся к кнопке (через эвентлистенер , т.е. прослушиваем событие клик) и когда оно срабатывает мы будем запускать функцию функцию. Где мы будем обращаться к mobailNavIcon через классЛист и метод toggle, который бужет добавлять, либо убирать класс active

// теперь проработаем класс active, чтобы он появлялся в нужное время

mobileNavButton.addEventListener('click', function() {
    mobileNavIcon.classList.toggle('active')
    mobileNav.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
})



// =================== VIDEO ===================

// Сначала надо найти кнопку по id

const videoBtn = document.querySelector('#video-story-btn')
const videoBtnIcon = document.querySelector('#video-story-btn-icon')
const videoOverlay = document.querySelector('#video-story-overlay')

//  теперь само видео

const videoFile = document.querySelector('#video-story')

// Теперь пишем поведение. Мы будем слушать клик по кнопке, и когда клик происходит, то видео начинает играть

// Обращаемся к кнопке и по клику запускаем функцию

videoBtn.addEventListener('click', function() {
    // теперь надо сделать паузу
    // мы будем проверять, если видео сейчас на паузе, то мы его запускаем и набборот

    function toggleOvelay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden')
        } else {
            videoOverlay.classList.remove('hidden')
        }
    }

    if (videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src = '../alivio-html-project/img/story/pause-white.svg'

        // когла мы нажали на кнопку и видео началось, тогда мы отслеживаем событие mouseleave  (оно работает так: когда мы уводим курсор с элемента, то срабатывает событие mouseleave)

        videoOverlay.onmouseleave = toggleOvelay
        videoOverlay.onmouseenter = toggleOvelay

    } else {
        videoFile.pause();
        videoBtnIcon.src = '../alivio-html-project/img/story/play-white.svg'
        videoOverlay.onmouseleave = null
        videoOverlay.onmouseenter = null
    }

})

// теперь надо сделать, чтобы на паузе иконка пауза
