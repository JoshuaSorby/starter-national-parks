const buttons = document.querySelectorAll(".rating-display .value");
console.log(buttons);

for (let element of buttons.values()) {
    console.log(element);
  }

  const firstBtn = document.querySelector("button");
  firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });

  const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});





const nameSorterClickHandler = (event) => {
  event.preventDefault();

  const main = document.querySelector("main");
  const parkList = document.querySelectorAll(".park-display");
  main.innerHTML = "";

  const parkArr = Array.from(parkList);
  parkArr.sort((parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
  });

  parkArr.forEach((park) => {
  main.appendChild(park);
  })
}

const nameSorter = document.querySelector("#name-sorter")

nameSorter.addEventListener("click", nameSorterClickHandler);

const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  const main = document.querySelector("main");
  const parkList = document.querySelectorAll(".park-display")
  main.innerHTML = "";

  const parkArr = Array.from(parkList);
  parkArr.sort((parkA, parkB) => {
    const parkARating = parkA.querySelector(".rating-display .value").innerText;
    const parkBRating = parkB.querySelector(".rating-display .value").innerText;
    console.log(parkARating)
    
    if (parkARating > parkBRating) {
      return -1;
    } else if (parkARating < parkBRating){
      return 1;
    } else {
      return 0;
    }
  });
  parkArr.forEach((park) => {
  main.appendChild(park);
  })
}

const ratingSorter = document.querySelector("#rating-sorter");
ratingSorter.addEventListener("click", ratingSorterClickHandler);