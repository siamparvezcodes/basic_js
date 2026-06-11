// const vowels = ['a', 'i', 'o', 'u', 'A', 'e', "E", 'I', 'O', 'U']

// function countVowels(sentence) {
//     let count = 0;
//     const letters = Array.from(sentence)

//     letters.forEach(function(value){
//         if(vowels.includes(value)){
//             count++
//         }
//     })
//     console.log(count)
// }
// countVowels("This is Siam Parvez")



const numbers = [1, 2, 3, 3, 4, 5, 3, 6, 7, 6, 9, 1];

const dublicatNumbers = numbers.filter(function (value, index, array) {
    return array.indexOf(value) !== index
})

console.log(dublicatNumbers)



