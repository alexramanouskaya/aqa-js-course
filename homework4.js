// ; 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
// ; 2. найти максимальное значение числа в массиве ([3,67,15...])
// ; 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
// ; 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению, но не по позиции (3487 и 3794 ---> 1 и 2 )
// ; 5. сортировка массива по возрастанию/убыванию
// ; 6. удалить из массива все повторяющиеся элементы



// 1.поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
const massive1 = [1,2,3,4,5,6] 
const reversedMassive = massive1.reverse()
console.log(reversedMassive)

//2-ой способ 
reversedMassive2 = [] 
for (let i = 0 ; i < massive1.length ; i++) {
reversedMassive2.push(massive1[i])
}
console.log('Reversed Massive 2', reversedMassive2)


// 2. найти максимальное значение числа в массиве ([3,67,15...])

const massive2 = [3, 67, 15, 127, 144]
const maxNumber = Math.max (...massive2)
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
let massiveNumber1 = number1.toString().split('').map(Number)
let massiveNumber2 = number2.toString().split('').map(Number)
let digit = 0
let positionDigit = 0
massiveNumber1.forEach((number , index) => {
    if (number === massiveNumber2[index])
    {
        positionDigit++
    }
    else if (massiveNumber2.includes(number))
    {
      digit++
    }
});
console.log("Свопадений по позиции и числу - " , positionDigit) 
console.log("Совпадений по числу - ", digit)



// 5. сортировка массива по возрастанию/убыванию

const massive5 = [1, 88, 63, 901, 123, 12, 44] ;
function sortMassive5(a, b) {
  return a - b ;
}
massive5.sort(sortMassive5) ; 
console.log(massive5)

const massive6 = [11, 78, 2, 999, 34, 9, 532]
function sort2Massive (a,b) {
  return b - a ; 
}
massive6.sort(sort2Massive) ;
console.log(massive6)

//6. удалить из массива все повторяющиеся элементы
const massive7 = [33, 11, 45, 177, 33, 67, 11]
const noDuplicates = [];
for (let i = 0; i < massive7.length; i++) {
    if (noDuplicates.indexOf(massive7[i]) === -1) { 
        noDuplicates.push(massive7[i]);
    }
}
console.log(noDuplicates)