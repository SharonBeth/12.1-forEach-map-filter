//     12.1 Exercise

//forEach       DoubleValues
function doubleValues(arr){
    let doublesArray = [];
    arr.forEach(function (val) {
        let valDouble=val+val
        doublesArray.push(valDouble)
    })
    return doublesArray;
}

//forEach       onlyEvenValues   
function onlyEvenValues(arr){
    let onlyEvens = [];
    arr.forEach(function (val){
        if (val % 2 === 0) {
            let even=val;
            onlyEvens.push(val);
        }
    })
    return onlyEvens;  
}

//forEach       showFirstAndLast
function showFirstAndLast(arr){
    let firstAndLast = [];

    arr.forEach(function (let){
        stringIndex = let.length-1;
        firstAndLast.push(let[0]+let[stringIndex])
    })
    return firstAndLast;
};

//forEach       addKeyAndValue
function addKeyAndValue(arr,key,value){
    arr.forEach(function (obj){
        obj[key] = value;
    })
    return arr;
}

//forEach       vowelCount
function vowelCount(str){
    let strArr = str.split("");
    let result = {};
    const vowels = "aeiouAEIOU";
    strArr.forEach(function (char){
        if(vowels.indexOf(char) !== -1){
            if(result[char]){
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    })
    return result;
};


//map          doubleValuesWithMap    
function doubleValuesWithMap(arr) {
    return arr.map(function (value) {
        return value *2;
    });
};

//map      valTimesIndex 
function valTimesIndex(arr){
    return arr.map (function (value, index, array){
        return value * index;
    })
    
}

//map       extractKey
function extractKey(arr, key){
    return arr.map (function (value, index, array){
        return value[key];
    })
    
}

//map       extractFullName
function extractFullName(arr){
    return arr.map(function(value, index, array){
        let firstName = value.first;
        let lastName = value.last;
        return `${firstName} ${lastName}`;
    })
    
}

//filter    filterByValue
function filterByValue(arr, key) {
    return arr.filter(function (value){
        return value[key];
    })
}

//filter    find
function find(arr, searchValue) {
    return arr.filter(function (value){
        return value === searchValue;
    })[0];
}

//filter   findInObj 
function findInObj(arr, key, searchValue) {
    return arr.filter (function (value){
        return value[key]=== searchValue;
    })[0];
}

//filter    removeVowels
function removeVowels(str) {
    const vowels = "aeiou";
    return str
        .toLowerCase()
        .split('')
        .filter(function (value){
            return vowels.indexOf(value)=== -1
        })
        .join("");
    }

//filter    doubleOddNumbers
function doubleOddNumbers(arr) {
    return arr
        .filter (function (value){
            return value % 2 !== 0
        })
        .map (function (odds){
            return odds*2
        })
    }
