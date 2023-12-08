//นับตัวอักษรใน array
//ดึงออกมานับทีละตัว

//ใช้ .map ดึงออกมาแล้วนับ

let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here 
  return words.length
}
let conutWords = words.map(getWordLengths);

console.log(conutWords); // Output: [5, 5]
