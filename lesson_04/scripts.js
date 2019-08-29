let money,
    time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    
    while (isNaN(money) || money == '' || money == null ) {
        money = prompt('Ваш бюджет на месяц?', '');
    }

    time = +prompt('Введите дату в формате YYYY-MM-DD','');
}    
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
        
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
                console.log('Done');
                appData.expenses[a] = b;
            } else {
                i--
            }
        }
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "грн.");
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }
    },

    checkSavings: function () {
        if (appData.savings == true) {
            let save = prompt("Каковы ваши сбережения?", ''),
                percent = prompt('Под какой процент?', '');
            appData.monthIncome = save / 100 / 12 * percent;
            
            alert('Ваш доход от депозита составляет: ' + appData.monthIncome + ' в месяц.');
        }
    },

    chooseOptionalExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let optEx = prompt('Не обязательные расходы', '');
            if (optEx == null || optEx == '') {
                i--
            } else {
                appData.optionalExpenses[i] = optEx;
            }
        }
    },

    chooseIncome: function() {
        let items;
        for (let i=0; Infinity; i++) {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую!)', '');
            if (typeof(items) != 'string' || items == '' || !isNaN(items)) {
                continue
            } else {
                break;
            }
        }

        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();

        alert('Способы дополнительного зароботка:');

        appData.income.forEach(function(val, n){
            alert(n + 1 + ' ' + val);
        });
    },
}

for (let key in appData) {
    console.log(key + ': ' + appData[key]);
}
