document.getElementById('btn2').onclick = task2;           // функция обработки нажатия на кнопку
function task2(){   
    const A = prompt("Введите число А: ");                 // ввод чисел
    if (isNaN(A)) {                                        // проверка на "дурака"
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
    let arr = [A, B, C];                                    // создание массива из чисел
    let min_var = Infinity;                                 // нахождение минимального элемента массива
    for(let i = 0; i < 3; i++) {
        let item = arr[i];
        if (item < min_var) {
            min_var = item;
        }
    }
    arr.splice(arr.indexOf(min_var), 1);                    // удаление минимального элемента из массива 
    const sum = ((+arr[0]) + (+arr[1])).toFixed(2);                      // сложение оставшихся двух чисел
    alert(`A= ${A}, B=${B}, C=${C}\n`+                      // вывод суммы двух наибольших чисел
        `Сумма двух наибольших чисел равна: ${sum}`);       
}

    