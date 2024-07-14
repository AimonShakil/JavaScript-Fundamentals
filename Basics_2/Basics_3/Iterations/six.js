
// for each, Fliter
const coding = ["js", "ts", "ruby"] // dont returns 


const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = numsArr.filter( (num) => num > 4)
console.log(newNums); // givves array from 5 to 10

//but mistake

const newNums2 =  numsArr.filter ( (num) => {
    // num > 4  this gives an error/ empty array coz after new scope return is ,must
})

//
const books = [
    {
      "id": 1,
      "name": "The Russian",
      "type": "fiction",
      "available": true
    },
    {
      "id": 2,
      "name": "Just as I Am",
      "type": "non-fiction",
      "available": false
    },
    {
      "id": 3,
      "name": "The Vanishing Half",
      "type": "fiction",
      "available": true
    },
    {
      "id": 4,
      "name": "The Midnight Library",
      "type": "fiction",
      "available": true
    },
    {
      "id": 5,
      "name": "Untamed",
      "type": "non-fiction",
      "available": true
    },
    {
      "id": 6,
      "name": "Viscount Who Loved Me",
      "type": "fiction",
      "available": true
    }
  ]

//   const userBooks = books.filter ( (bk) => bk.type == 'fiction' )
//   console.log(userBooks);

const userBooks = books.filter ( (bk) => {
bk.id >=4 && bk.type == 'fiction'})
console.log(userBooks); //id 4 and 6 should come