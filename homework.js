// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.


function removeSideEffect(arr, item) {
    while (arr.includes(item)) {
        arr.splice(arr.indexOf(item), 1);
    }
    return arr;
}

function removeAlt(arr, item) {
    let arrCopy = arr.slice();
    while (arrCopy.includes(item)) {
        arrCopy.splice(arrCopy.indexOf(item), 1);
    }
    return arrCopy;
}

function remove(arr, item) {
    let arrRet = [];
    for ( let element of arr ) {
        if (element != item){
            arrRet.push(element);
        }
    }
    return arrRet;
}

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// *********** Modified above the above remove function *************

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(arr) {
    let sum = 0;
    if (arr.length == 0) {
        return 0;
    }
    for (let item of arr) {
        sum += item;
    }
    return sum;
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(arr) {
    if (arr.length == 0) {
        return undefined;
    }
    return sum(arr) / arr.length;
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(arr) {
    // if (arr.length == 0) {
    //     return undefined;
    // }
    // return arr.reduce(( currentMin, item) => { if (item <= currentMin) { currentMin = item; return currentMin; } });
    let min = arr[0];
    for (let item of arr) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(arr) {
    let arrCopy = arr.slice();
    let arrSorted = [];
    while (arrCopy.length > 0) {
        let m = minimum(arrCopy);
        arrSorted.push(arrCopy.splice(arrCopy.indexOf(m), 1)[0]);
    }
    return arrSorted;
}

function selectionSortOld(arr) {
    // if (arr.length == 0) {
    //     return [];
    // }

    let arrCopy = arr.slice();

    for (let i = 0; i < arr.length; i++) {
        let end = arrCopy.splice(i);

        let m = minimum(end);

        end.splice(end.indexOf(m), 1);
        end.unshift(m);
        for (let item of end) {
            arrCopy.push(item);
        }
    }
    return arrCopy
}

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList(arr) {
    if (arr.length == 0) {
        return "";
    }
    else if (arr.length == 1) {
        return arr[0];
    }
    else {
        let str = "";
        for (let i = 0; i < arr.length - 1; i++) {
            str += arr[i] + ",";
        }

        str += arr[arr.length - 1];
        return str;
    }
}