document.getElementById('btn1').onclick = task1;    // функция обработки нажатия на кнопку
function task1(){
    const A = prompt("Введите число А: ");         // ввод чисел
    if (isNaN(A)) {                                // проверка на "дурака"
        alert('Неверный ввод');
        throw new Error('Неверный ввод');
    } 
    const B = prompt("Введите число B: ");
    if (isNaN(B)) {                                
        alert('Неверный ввод');
        throw new Error('Неверный ввод');
    } 
    const C = prompt("Введите число C: ");
    if (isNaN(C)) {
        alert('Неверный ввод');
        throw new Error('Неверный ввод');
    } 
    const arr = [A, B, C];                          // создание массива из чисел
    let counter = 0                                 
    for(let i = 0; i < 3; i++) {                    // цикл прибавляет 1, если число положительное
        if (arr[i] > 0) {
            counter += 1;
        }
    }
    if (counter == 2){                              
        alert(`A= ${A}, B=${B}, C=${C}\nTrue`);     // вывод 'True', если два числа положительны
    } else {                                        
        alert(`A= ${A}, B=${B}, C=${C}\nFalse`);    // вывод 'False' в ином случае
    }
}
