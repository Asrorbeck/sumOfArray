var arr = [1, 3, 5, 9];

var sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);


var mainWords = prompt("Matn Kiriting (Misol uchun Ism Familiyangiz): ")
mainWords = mainWords.split(" ");

// console.log(mainWords);

function longestWord(array) {
    var result = [];
    var asror = "";

    for (let i = 0; i < array.length; i++) {

        if (array[i].length > asror.length) {
            asror = array[i]
        }
    }
    console.log(asror); 
}

var mainResult = longestWord(mainWords);

alert("Console ga Kiring! ")