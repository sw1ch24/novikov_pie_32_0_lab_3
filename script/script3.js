document.getElementById('btn3').onclick = task3;                // функция обработки нажатия на кнопку
function task3(){
    let x = document.getElementById('input_X3').value;          // обработка инпута и преобразование строки в число
    let img = document.getElementById('img3');                   // запись элемента изображения с формулой
    if (isNaN(x) || x =='') {
        document.getElementById('output_task3').innerHTML = '';  // удаление вывода предыдущего вывода скрипта
        img.src = '';
        alert('Неверный ввод!');                                // проверка на неправильный ввод
        return;
    } else {
        x = Number(x);
    }
    let a = 5.5;                                                // объявление заданных переменных
    let b = 3.1;
    let y;
    if (x >= 1) {                                               // вычисление 'y'
        y = Math.pow(Math.E, x) + 1;
        img.src = '../assets/img/formula1.jpg';                  // указание пути для изображения
    } else if (x > 0) {
        y = Math.pow(Math.sin(Math.sqrt(a * x)), 2);
        img.src = '../assets/img/formula2.jpg';
    } else {
        y = Math.log(b + Math.sqrt(Math.abs(x)));
        img.src = '../assets/img/formula3.jpg';
    }
    document.getElementById('output_task3').innerHTML = `y = ${y}`;        // вывод 'y'
}
