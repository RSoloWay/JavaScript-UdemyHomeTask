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
    
    // FORM



    let message = {
        loading: 'Whait a bit...',
        success: 'Thank You!',
        failure: 'Something wrong!'
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),


        footerForm = document.getElementById('form'),
        footerFormInp = footerForm.getElementsByTagName('input');


    statusMessage.classList.add('status');


    form.addEventListener('submit', function(event){
        event.preventDefault();

        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);
        request.send(formData);

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }

        })

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    })
    
    footerForm.addEventListener('submit', function(event){
        event.preventDefault();

        footerForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(footerForm);
        request.send(formData);

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        })

        for (let i = 0; i < footerFormInp.length; i++) {
            footerFormInp[i].value = '';
        }
    })



    // Slider


    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
        
    showSlides(slideIndex);
    
    function showSlides(n) {
        if(n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active'); 
    }


   
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
        for (let i = 0; i <dots.length + 1; i++ ) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });


    // Калькулятор
    let person = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daySum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    person.addEventListener('change', function(){
        personSum = +this.value;
        total = (daySum * personSum) * 1000  * place.options[place.selectedIndex].value;
        
        if (restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
        
    });
    restDays.addEventListener('change', function(){
        daySum = +this.value;
        total = (daySum * personSum) * 1000 * place.options[place.selectedIndex].value;
        
        if (person.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }  
    });

    place.addEventListener('change', function(){
        if (restDays.value == '' || person.value == '') {
            totalValue.innerHTML = 0;
        } else {
            
            totalValue.innerHTML = daySum * personSum * 1000 * this.options[this.selectedIndex].value;
        }
    })
   
})