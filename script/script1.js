document.getElementById('btn1').onclick = task1;                // обработка нажатия на кнопку выполнения скрипта
function task1(){
    let A = document.getElementById('input_A1').value;          // обработка инпута и преобразование строки в число
    let B = document.getElementById('input_B1').value;
    let C = document.getElementById('input_C1').value;
    if (isNaN(A) || A =='' || isNaN(B) || B =='' || isNaN(C) || C =='') {
        document.getElementById('output_task1').innerHTML = '';  // удаление вывода предыдущего вывода скрипта
        alert('Неверный ввод!');                                // проверка на неправильный ввод
        return;
    } 
    if ((A > 0) + (B > 0) + (C > 0) == 2) {
        document.getElementById('output_task1').innerHTML = 'True';   // вывод 'True', если два числа положительны
        return;
    } else { 
        document.getElementById('output_task1').innerHTML = 'False';  // вывод 'False' в ином случае                                                                                          
    }
}
