//-----------------Q1----------------------------

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function power_Original_for(array_) {

    let new_arr = [];

    for (let i = 0; i <= array_.length - 1; i++) {
        new_arr[i] = 2 ** array_[i];
    }

    console.log("Q1- original for loop ");
    return console.log(new_arr);
}


power_Original_for(arr);


function power_for_each(array_) {
    let new_arr = [];

    array_.forEach(function (arr_num) {
        new_arr.push(2 ** arr_num);
    });

    console.log("Q1- for each ");
    return console.log(new_arr);
}

power_for_each(arr);



let new_array = arr.map(function (arr_num) {
    return 2 ** arr_num;
});

console.log("Q1- map function ");
console.log(new_array);



//-----------------Q2----------------------------

let r_array = [3, 4, ";D", 5, 9, ":)", 7, 6, 1];

function check_arr(array_) {

    let new_array = [];

    for (let i = 0; i <= array_.length - 1; i++) {
        if (typeof (array_[i]) == typeof (1) && array_[i] % 2 == 0) {
            new_array.push("even");
        }
        else if (typeof (array_[i]) == typeof (1) && array_[i] % 2 != 0) {
            new_array.push("odd");
        }
        else {
            new_array.push(NaN);
        }
    }

    return console.log(new_array);
}

console.log("Q2- ");

check_arr(r_array);


//-----------------Q3----------------------------


let n_array = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

console.log("Q3- ");

n_array.forEach(function (num) {
    return console.log(num);
});

//-----------------Q4----------------------------

let int_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];

let new_result = [];

function fizzbuzz(array_) {
    new_result = array_.map(function (i) {
        if (i % 3 == 0 && i % 5 == 0) {
            return "fizzbuzz";
        }
        else if (i % 3 == 0) {
            return "fizz";
        }
        else if (i % 5 == 0) {
            return "buzz";
        }
        else {
            return i;
        }
    });
    return new_result;
}



console.log("Q4- ");
console.log(fizzbuzz(int_arr));