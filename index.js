var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
   if (randomNumber1===1){
    document.querySelector(".img1").attributes;
    document.querySelector(".img1").getAttribute("src");
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
   } else if (randomNumber1===2){
      document.querySelector(".img1").attributes;
      document.querySelector(".img1").getAttribute("src");
      document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
      
   } else if (randomNumber1===3){
      document.querySelector(".img1").attributes;
      document.querySelector(".img1").getAttribute("src");
      document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
   } else if (randomNumber1===4){
      document.querySelector(".img1").attributes;
      document.querySelector(".img1").getAttribute("src");
      document.querySelector(".img1").setAttribute("src", "./images/dice4.png");

   } else if (randomNumber1===5){
      document.querySelector(".img1").attributes;
      document.querySelector(".img1").getAttribute("src");
      document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
   } else {
      document.querySelector(".img1").attributes;
      document.querySelector(".img1").getAttribute("src");
      document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
   }
   if (randomNumber2===1){
    document.querySelector(".img2").attributes;
    document.querySelector(".img2").getAttribute("src");
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
   } else if (randomNumber2===2){
    document.querySelector(".img2").attributes;
    document.querySelector(".img2").getAttribute("src");
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
   } else if (randomNumber2===3){
    document.querySelector(".img2").attributes;
    document.querySelector(".img2").getAttribute("src");
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
   } else if (randomNumber2===4){
    document.querySelector(".img2").attributes;
    document.querySelector(".img2").getAttribute("src");
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
   } else if (randomNumber2===5){
    document.querySelector(".img2").attributes;
    document.querySelector(".img2").getAttribute("src");
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
   } else {
      document.querySelector(".img2").attributes;
      document.querySelector(".img2").getAttribute("src");
      document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
   }



if (randomNumber1 > randomNumber2) {
   //console.log(" Palyer 1 is a winner")
    document.getElementsByTagName("h1").textContent = "Player 1 Won";
} else if (randomNumber1 === randomNumber2) {
   document.getElementsByTagName("h1").textContent = "Its a draw";
   //console.log(" Its a draw")
} else {
   document.getElementsByTagName("h1").textContent = "Player 2 Won";
   
   //console.log("player 2 is a winner")
}
