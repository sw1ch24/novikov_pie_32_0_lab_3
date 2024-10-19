document.getElementById('btn3').onclick = task3;            // функция обработки нажатия на кнопку
function task3(){
    const x = +prompt("Введите x: ");                       // ввод числа 'х'
    if (isNaN(x)) {                                         // проверка на "дурака"
        alert('Неверный ввод');
        throw new Error('Неверный ввод');
    } 
    const a = 5.5;                                          // объявление неизменных переменных
    const b = 3.1;
    const y = (x >= 1) ? Math.pow(Math.E, x) + 1:           // тернарный оператор для нахождения 'y'
        (x > 0) ? Math.pow(Math.sin(Math.sqrt(a * x)), 2):
        Math.log(b + Math.sqrt(Math.abs(x)));
    alert(` x=${x}\n y=${y}`);                              // вывод 'y'
}
