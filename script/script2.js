document.getElementById('btn2').onclick = task2;                // обработка нажатия на кнопку выполнения скрипта
function task2(){
    let A = document.getElementById('input_A2').value;          // обработка инпута чисел
    let B = document.getElementById('input_B2').value;
    let C = document.getElementById('input_C2').value;
    if (isNaN(A) || A =='' || isNaN(B) || B =='' || isNaN(C) || C =='') {
        document.getElementById('output_task2').innerHTML = '';  // удаление вывода предыдущего вывода скрипта
        alert('Неверный ввод!');                                // проверка на неправильный ввод
        return;
    } else {
        A = Number(A);
        B = Number(B);
        C = Number(C);
    }
    let sum;
    if ((A <= B) && (A <= C)) {                             // поиск наименьшей переменной и суммирование двух оставшихся
        sum = B + C;
    } else if ((B <= A) && (B <= C)){
        sum = A + C;
    } else {
        sum = A + B;
    }
    document.getElementById('output_task2').innerHTML = 
    `Сумма двух наибольших чисел равна: ${sum}`;            // вывод суммы двух наибольших чисел               
}
