document.getElementById('btn4').onclick = task4;            // функция обработки нажатия на кнопку
function task4(){
    const x = +prompt("Введите x: ");                       // ввод числа 'х'
    if (isNaN(x)) {                                         // проверка на "дурака"
        alert('Неверный ввод');
        throw new Error('Неверный ввод');
    } 
    const a = 5.5;                                          // объявление неизменных переменных
    const b = 3.1;
    let y;                                                  // объявление 'y'
    switch (x) {                                            // нахождение и вывод 'y'
        case 2:
            y = Math.pow(Math.E, x) + 1;
            alert(` x=${x}\n y=${y}`);
            break;
        case 1:
            y = Math.pow(Math.sin(Math.sqrt(a * x)), 2); 
            alert(` x=${x}\n y=${y}`);
            break;
        case 0:
            y = Math.log(b + Math.sqrt(Math.abs(x)));
            alert(` x=${x}\n y=${y}`);
            break;
        default:
            alert("Для данного 'x' невозможно найти 'y'" )
    }
}