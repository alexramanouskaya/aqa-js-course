

// 1.поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
const array1 = [1,2,3,4,5,6] 
const reversedMassive = array1.reverse()
console.log(reversedMassive)

//2-ой способ 
reversedArray2 = [] 
for (let i = 0 ; i < array1.length ; i++) {
reversedArray2.push(array1[i])
}
console.log('Reversed Massive 2', reversedArray2)


// 2. найти максимальное значение числа в массиве ([3,67,15...])

const array2 = [3, 67, 15, 127, 144]
const maxNumber = Math.max (...array2)
console.log(maxNumber)

// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
function func1(n, m) {
let x = 0
let y = 1 
const fibonachi = []
for (let i = 0; i < n; i++) {
[x, y] = [y, x + y] 
}
for (i = 0 ; i < m ; i++) {
fibonachi.push(x);
[x, y] = [y, x + y] 
}
console.log(fibonachi)
}
func1(5, 9) ;

// ; 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению, но не по позиции (3487 и 3794 ---> 1 и 2 )
//const massive4 = [3487 , 3794 ]
let number1 = 3487
let number2 = 3794
let arrayNumber1 = number1.toString().split('').map(Number)
let arrayNumber2 = number2.toString().split('').map(Number)
let digit = 0
let positionDigit = 0
arrayNumber1.forEach((number , index) => {
    if (number === arrayNumber2[index])
    {
        positionDigit++
    }
    else if (arrayNumber2.includes(number))
    {
      digit++
    }
});
console.log("Свопадений по позиции и числу - " , positionDigit) 
console.log("Совпадений по числу - ", digit)



// 5. сортировка массива по возрастанию/убыванию

const array5 = [1, 88, 63, 901, 123, 12, 44] ;
function sortArray5(a, b) {
  return a - b ;
}
array5.sort(sortArray5) ; 
console.log(array5)

const array6 = [11, 78, 2, 999, 34, 9, 532]
function sort2Array (a,b) {
  return b - a ; 
}
array6.sort(sort2Array) ;
console.log(array6)

//6. удалить из массива все повторяющиеся элементы
const array7 = [33, 11, 45, 177, 33, 67, 11]
const noDuplicates = [];
for (let i = 0; i < array7.length; i++) {
    if (noDuplicates.indexOf(array7[i]) === -1) { 
        noDuplicates.push(array7[i]);
    }
}
console.log(noDuplicates)