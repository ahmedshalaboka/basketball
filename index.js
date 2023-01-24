let home = 0
let guest= 0
let homeResult=document.getElementById('home-id')
let guestResult= document.getElementById('guest-id')


function home1(){
    home+=1
    homeResult.textContent=home
}
function home2(){
    home+=2
    homeResult.textContent=home
}
function home3(){
    home+=3
    homeResult.textContent=home
}
function guest1(){
    guest+=1
    guestResult.textContent=guest
}
function guest2(){
    guest+=2
    guestResult.textContent=guest
}
function guest3(){
    guest+=3
    guestResult.textContent=guest
}

function reset(){
    home=0
    guest=0
    homeResult.textContent=home
    guestResult.textContent=guest
    
}