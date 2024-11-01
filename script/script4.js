document.getElementById('btn4').onclick = task4;            // функция обработки нажатия на кнопку
function task4(){
    let x = document.getElementById('input_X4').value;  // обработка инпута и преобразование строки в число
    let img = document.getElementById('img4');                   // запись элемента изображения с формулой
    if (isNaN(x) || x =='') {
        document.getElementById('output_task4').innerHTML = '';  // удаление вывода предыдущего вывода скрипта
        img.src = '';
        alert('Неверный ввод!');                                // проверка на неправильный ввод
        return;
    } else {
        x = Number(x);
    } 
    let a = 5.5;                                            // объявление неизменных переменных
    let b = 3.1;
    let y;                                                  // объявление 'y'
    switch (x) {                                            // нахождение и вывод 'y'
        case 2:
            y = Math.pow(Math.E, x) + 1;
            img.src = '../assets/img/formula1.jpg';           // указание пути для изображения
            break;
        case 1:
            y = Math.pow(Math.sin(Math.sqrt(a * x)), 2); 
            img.src = '../assets/img/formula2.jpg'; 
            break;
        case 0:
            y = Math.log(b + Math.sqrt(Math.abs(x)));
            img.src = '../assets/img/formula3.jpg'; 
            break;
        default:
            y = 'невозможно найти для данного x';
            img.src = '';
    }
    document.getElementById('output_task4').innerHTML = `y = ${y}`;        // вывод 'y'
}
