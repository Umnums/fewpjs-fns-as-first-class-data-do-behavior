/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let timeInt = parseInt(time)
  if (timeInt < 12) {
    let greeting = 'Good Morning'
    return greeting 
  }else if (timeInt > 12 && timeInt < 17 ){
    let greeting = 'Good Afternoon'
    return greeting
  }else{
    let greeting = 'Good Evening'
    return greeting
  }
}

function displayMessage(message){
  let greeting = document.querySelector('#greeting')
  greeting.innerHTML = message
}
/* Write your implementation of displayMessage() */
