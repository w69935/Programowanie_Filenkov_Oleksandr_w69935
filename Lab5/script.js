// let table1 = [];
// function task1(){
// for  ( let i = 0; i < 10; i++) {
//     let number = parseInt(prompt("Podaj liczbę całkowite: " + (i + 1)));
//     table1.push(number);
// }
// console.log(table1);
// }

// function task1_find(){
//     let search = prompt('Give searched number: ')
//     let find=table1.filter(elem => elem == search);
//     console.log(search)

    
// console.log(find);

// console.log(find.lenght)
// }



// 2

// let tab = [1,2,3,4,5,6];
// console.log(tab);

// let numInsert = prompt('Give number to insert: ')

// let numPlace = prompt('Give place to be inserted: ')

// tab.splice(numPlace, 0, parseFloat(numInsert));

// console.log(tab);


// 3

// function reverseString(str) {
//     let splitString = str.split(""); 
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("");
//     return joinArray; 
// }

// 4
// function random(minEl = 0, maxEl = 100) {
//     let randomTable = [];
//     tableLen = parseInt(prompt('Table lenght'));
//     for( let i = 0; i < tableLen; i++) {
//     randomTable.push(Math.floor(Math.random() *(maxEl-minEl+1)) + minEl);
// }
//     return randomTable
// }

// 5



// let liczby = [5, 10, 15, 20, 25, 30];


// let suma = liczby.reduce((acc, curr) => acc + curr, 0);
// console.log("Suma wartości: " + suma);


// let parzyste = liczby.filter((liczba) => liczba % 2 === 0);
// console.log("Liczby parzyste: " + parzyste);


// let pomnozone = liczby.map((liczba) => liczba * 3);
// console.log("Pomnożone wartości: " + pomnozone);


// let numerAlbumu = 69935;
// liczby.push(numerAlbumu);
// let indexNumeruAlbumu = liczby.indexOf(numerAlbumu);
// console.log("Index numeru albumu (" + numerAlbumu + "): " + indexNumeruAlbumu);

// let srednia = suma / liczby.length;
// console.log("Średnia arytmetyczna: " + srednia);


// let najwieksza = Math.max(...liczby);
// console.log("Największa liczba: " + najwieksza);


// let szukanaWartosc = 15;
// let iloscWystapien = liczby.filter((liczba) => liczba === szukanaWartosc).length;
// console.log("Ilość wystąpień wartości " + szukanaWartosc + ": " + iloscWystapien);


// 6

// function fibonacci(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib;
//   }
  
//   let fibonaccis = fibonacci(101);
//   console.log(fibonaccis);

// // 7

// function sumaDwochNajwiekszych(tablica) {
//     let posortowanaTablica = tablica.sort((a, b) => b - a);
//     let najwieksza = posortowanaTablica[0];
//     let drugaNajwieksza = posortowanaTablica[1];
//     return najwieksza + drugaNajwieksza;
//   }

//   let mojaTablica = [10, 5, 20, 3, 8];
//   let wynik = sumaDwochNajwiekszych(mojaTablica);
//   console.log("Suma dwóch największych liczb: " + wynik);

// 8

function usunDuplikaty(tablica) {
    return Array.from(new Set(tablica));
  }
  
  let tablica = [1, 2, 3, 4, 2, 3, 6, 7, 8, 1, 8, 7];
  let wynik = usunDuplikaty(tablica);
  console.log(wynik);