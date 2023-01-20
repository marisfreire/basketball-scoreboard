let scoreHome  = document.getElementById("score-home") 
let totalHome = 0

function plusOneHome(){
    totalHome = totalHome + 1
    scoreHome.textContent = totalHome
}  

function plusTwoHome(){
    totalHome = totalHome + 2
    scoreHome.textContent = totalHome
}  
  

function plusThreeHome(){
    totalHome = totalHome + 3
    scoreHome.textContent = totalHome
}  
 

let scoreGuest  = document.getElementById("score-guest") 
let totalGuest = 0

function plusOneGuest(){
    totalGuest = totalGuest + 1
    scoreGuest.textContent = totalGuest
}  

function plusTwoGuest(){
    totalGuest = totalGuest + 2
    scoreGuest.textContent = totalGuest
}  

function plusThreeGuest(){
    totalGuest = totalGuest + 3
    scoreGuest.textContent = totalGuest
}  

function restart(){
  totalHome = 0
  totalGuest = 0
  scoreHome.textContent = totalHome
  scoreGuest.textContent = totalGuest
}