let indexOf = function(arr, value){
    let ticks = 0;
    for(let i = 0; i < arr.length; i++){
        ticks ++;
        if(arr[i] === value){
            return i;
        }
    }
    return 'item not found';
}

console.log(indexOf([89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,], 42))

function binarySearch(array, value, start, end) {

    let sortedArr = array.sort();

    return split(array,value,start,end, 0);
    
};

function split(array, value,start,end, counter){
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return 'value not found';
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];


    if (item == value) {
        console.log('counter', counter);
        return index;
        
    }
    else if (item < value) {
        console.log('counter', counter);
        return split(array, value, index + 1, end, counter + 1);
    }
    else if (item > value) {
        console.log('counter', counter);
        return split(array, value, start, index - 1, counter + 1);
    }
}
console.log(binarySearch([1,2,3,4,5,6,7,98],2))

function findBook(library, dewey, title) {
    var start = 0;
    var end = library.length;

    while (start < end) {
        let index = Math.floor((start + end) / 2);
        if (library[index].dewey == dewey) {
            if (library[index].title == title) {
                return library[index];
            }
            for (let i = index + 1; library[i].dewey == dewey; ++i)
                if (library[i].title == title) {
                    return library[i];
                }
            for (let i = index - 1; library[i].dewey == dewey; --i){
                if (library[i].title == title) {
                    return library[i];
                }
        }
        if (library[index].dewey < dewey)
            start = index + 1;
        else
            end = index - 1;
    }
    return 'book not here';
};
