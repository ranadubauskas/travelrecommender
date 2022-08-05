
console.log("script running");
//Destination Guesser
let button=document.getElementById("button");
let destinations= [
  "France",
  "Italy",
  "United States",
  "Mexico",
  "Greece", 
  "China", 
  "Russia",
  "Korea",
  "Brazil",
  "Ireland",
  "Portugal"
]
let franceTile=document.querySelector("#France");
let italyTile=document.querySelector("#Italy");
let unitedStatesTile=document.querySelector("#UnitedStates");
let mexicoTile=document.querySelector("#Mexico");
let greeceTile=document.querySelector("#Greece");
let chinaTile=document.querySelector("#China");
let russiaTile=document.querySelector("#Russia");
let koreaTile=document.querySelector("#Korea");
let brazilTile=document.querySelector("#Brazil");
let irelandTile=document.querySelector("#Ireland");
let portugalTile=document.querySelector("#Portugal");
console.log(franceTile);
button.addEventListener("click", (e)=> {
 let randomNum=Math.floor(Math.random() * 10);
 let country=destinations[randomNum];
  if(country==="France"){
  
    franceTile.classList.remove("hidden");
  }
  else if(country==="United States"){
    unitedStatesTile.classList.remove("hidden");
  }
  else if(country==="Mexico"){
    mexicoTile.classList.remove("hidden");
  }
   else if(country==="Greece"){
    greeceTile.classList.remove("hidden");
  }
   else if(country==="Russia"){
    russiaTile.classList.remove("hidden");
  }
   else if(country==="Korea"){
    koreaTile.classList.remove("hidden");
  }
   else if(country==="Brazil"){
    brazilTile.classList.remove("hidden");
  }
   else if(country==="Ireland"){
    irelandTile.classList.remove("hidden");
  }
   else if(country==="Portugal"){
    portugalTile.classList.remove("hidden");
   }
});







//QUIZ

//selects images
let pictures = document.querySelectorAll(".image");
pictures.forEach((picture) => console.log(picture.id)); 

let quizValues = {
  clothes: ["relaxing", "exciting", "relaxing", "exciting"],
  food: ["solo", "together", "solo", "together"],
}

// 'quizTaker' object here
let quizTaker = {
  relaxing: 0,
  exciting: 0,
  solo: 0,
  together: 0,
};

pictures.forEach((picture) => { 
  picture.addEventListener("click", (e) => { //To click image
    
    // Save the user's choice in a variable.
    let choice = picture.id.split("-"); //stores id as array so color-0 becomes [color][0]
    console.log(choice);

    picture.classList.toggle("has-background-warning");

    
    // Increment the right personality trait
    let answer = quizValues[choice[0]][choice[1]];       //quizValues[color][0]
    console.log(answer);
    quizTaker[answer]++;

    
    let row_1 = document.querySelector("#row1");
    
    let row_0 = document.querySelector("#row0");
    
    if (choice[0] === "clothes") {
    row_1.classList.remove("hidden");
    row_0.classList.add("hidden");
    }
    
    // If its the last question, unhide the result.
    if (choice[0] === "food") { //once you click the last answer 
      let resultID; //id label

      if (quizTaker.relaxing > quizTaker.exciting) {
        resultID = "#relaxing-"; 
      } else {
        resultID = "#exciting-";
      }

      if (quizTaker.solo > quizTaker.together) {
        resultID += "solo";
      } else {
        resultID += "together";
      }

      let result = document.querySelector(resultID); 
      console.log(result);
      result.classList.remove("hidden");
    }

  });

  });
