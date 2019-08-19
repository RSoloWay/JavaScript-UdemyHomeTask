let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu');
    li = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv') [0],
    applePrompt = document.querySelector('#prompt');

li.classList.add('menu-item');

li.innerHTML = 'Пятый пункт';

menu.appendChild(li);

menu.insertBefore(menuItem[2], menuItem[1]);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove()

let yourOpp = prompt('Введите ваше мнение о Apple', '');

    applePrompt.textContent = yourOpp;