window.addEventListener('DOMContentLoaded', function() {

    'use strict'

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTab(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            
        }
    }

    hideTab(1);

    function showTab(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTab(0);
                    showTab(i);
                    break;
                }
            }
        }
    })
    
    

    // TIMER
    
    let deadLine = '2019-08-25';

    function getTimeRemaining(endtime) {
        let t  = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / 1000 / 60 / 60);
            
            return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            let t = getTimeRemaining(endtime)
            if (t.hours < 10) {
                    hours.textContent = '0' + t.hours;
                } else {
                    hours.textContent = t.hours;
                }
                if (t.minutes < 10) {
                    minutes.textContent = '0' + t.minutes;
                } else {
                    minutes.textContent = t.minutes;
                }
                if (t.seconds < 10) {
                    seconds.textContent = '0' + t.seconds;
                } else {
                    seconds.textContent = t.seconds;
                }

                if (t.total < 0 ) {
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                    clearInterval(timeInterval);
                }
        }
     }
     
     setClock('timer', deadLine);
     
    // Modal window 
    
    let moreBtn = document.querySelector('.more'),
        popupInfo = document.querySelector('.info'),
        modalWindow = document.querySelector('.overlay'),
        modalExit = document.querySelector('.popup-close');

    moreBtn.addEventListener('click', function(){
        modalWindow.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    modalExit.addEventListener('click', function(){
        modalWindow.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    
    popupInfo.addEventListener('click', function(event) {
        let targ = event.target;
        if (targ && targ.classList.contains('description-btn')) {
            modalWindow.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
        
    });
    

})