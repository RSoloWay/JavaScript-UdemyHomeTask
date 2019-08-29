// function User (name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
    
//     this.hello = function() {
//         console.log('Hello ' + this.name + ' !');
//     }
// }

// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' вышел!');
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();


// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b
//     }
//     console.log(sum);
// }

// showThis(4, 5);
// showThis(4, 6);


// let obj = {
//     a: 2,
//     b: 3,
//     sum: function() {
//         // return this.a + this.b;
//         console.log(this);
//     }
// }

// obj.sum();


// let user = {
//     name: 'John'
// }

// function sayName() {
//     console.log(this);
//     console.log(this.name);
// }


// console.log(sayName.call(user));
// console.log(sayName.apply(user));
// 1) Просто вызов функции (window || undefined)
// 2) Метод объекта - this = объект
// 3) Конструктор new - this = новый созданный объект






let deadLine = '2019-08-24';

function getTimeRemaining(endtime) {
    let t  = Date.parse(endtime) - Date.parse(new Date()),
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

function setClock(endtime) {
    let tInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let x = getTimeRemaining(endtime);
        if (x.total <= 0) {
            clearInterval(tInterval);
        } else {
            console.log(x.hours + ':' + x.minutes + ':' + x.seconds);
        }     

    }
}

setClock(deadLine);