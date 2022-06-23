//const button5 = document.querySelector("#plusFive");
const indicator = document.querySelector("#number-indicator");
const disp = document.querySelector("#display-heading");

/*
button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
});*/

//spead all the button in an array and loop through
[...document.querySelectorAll("button")].forEach( (button, index) => {
  //add event listener to all the buttons
  button.addEventListener("click", () => {
    if (index === 0){
      console.log("clicked btn1");
      //plus 5
      disp.textContent = "added 5";
      indicator.textContent = (parseInt(indicator.textContent) + 5).toString();
    }else if (index === 1){
      //plus 10
      disp.textContent = "added 10";
      indicator.textContent = (parseInt(indicator.textContent) + 10).toString();
    }else if (index === 2){
      //plus 15
      disp.textContent = "added 15";
      indicator.textContent = (parseInt(indicator.textContent) + 15).toString();
    }else{
      //plus 20
      disp.textContent = "added 20";
      indicator.textContent = (parseInt(indicator.textContent) + 20).toString();
    }
  });
});