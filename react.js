
// React Assessments

// 1. Write a simple React component that prints 'I am a component' to the screen. Be sure to include all necessary imports, exports, etc...

// import React, { Component } from 'react'
//
// class Homework extends Component {
//   render() {
//       return (
//
//         <div><center>
//         <h2>Hi SunnyD! ... I am a component. =)</h2>
//         </center></div>
//
//       )
//   }
// }
//
// export default Homework



// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this,
// write a vanilla javascript for loop that outputs the same thing as the map function below.

var stuffArray = [42, 'Arthur Dent', 1978, 'Zaphod', 'Vogon', 'Marvin, the Paranoid Android']

stuffArray.map(function(el, i){
    console.log(el + " is at index: " + i)
})


// your for loop here, you can use the same stuffArray array

function hitchhiker(array) {
    for(let i = 0; i < array.length; i++) {
    console.log(array[i] + ' is at index: ' + array.indexOf(array[i]))
  }
}
console.log(hitchhiker(stuffArray))



// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the single lowest price from the array.
// Write a function that takes in an array of numbers, and returns the lowest price.

var priceList = [54,74,25]

steal = (array) => {
    array = array.sort()
    return array[0]
}

console.log(steal(priceList))
