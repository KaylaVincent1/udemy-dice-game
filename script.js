var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
// randomNumber1 = 3;
// document.querySelector(".img1").setAttribute("src","images/dice1.png" )
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumber2 +".png");      

// simplified into 2 lines :)
// switch (randomNumber1) {
//     case 1:
//         document.querySelector(".img1").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice1.png");
//         break;
//         case 2:
//             document.querySelector(".img1").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice2.png");
        
//             break;
//         case 3:
//             document.querySelector(".img1").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice3.png");
//         break;
//         case 4:
//             document.querySelector(".img1").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice4.png");
//         break;
//         case 5:
//             document.querySelector(".img1").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice5.png");
//         break;   

//     default:
//         document.querySelector(".img1").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice6.png");
//         break;
// }

// switch(randomNumber2){
//     case 1:
//         document.querySelector(".img2").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice1.png");
//         break;
//         case 2:
//             document.querySelector(".img2").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice2.png");
        
//             break;
//         case 3:
//             document.querySelector(".img2").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice3.png");
//         break;
//         case 4:
//             document.querySelector(".img2").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice4.png");
//         break;
//         case 5:
//             document.querySelector(".img2").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice5.png");
//         break;   

//     default:
//         document.querySelector(".img2").setAttribute("src", "../Dicee Challenge - Starting Files/images/dice6.png");
//         break;
// }

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}