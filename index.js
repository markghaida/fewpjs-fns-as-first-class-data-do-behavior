/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet (string) {

  let stringToInt = string.split(":");
  let time= parseInt(stringToInt, 10); 
  

  if (time < 12) {

    return "Good Morning";
  }
  
  else if (time === 12) {
    return "Good Afternoon";
  }
 
  else if (time > 12 && time < 17){

    return "Good Afternoon";
  }
  
  else if (time === 17) {
    return "Good Evening";
  }

  else if (time > 17) {
    return "Good Evening";
  }

}

/* Write your implementation of displayMessage() */

function displayMessage (input){
  document.getElementById("greeting").innerText = input;
}