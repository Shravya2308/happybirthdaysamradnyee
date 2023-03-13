alert("Welcome to Sam's spellictionary")
alert('Sam the spells expert will introduce you to a new spell!!')

let dib = document.getElementById('hello');
let bday_sound = document.querySelector(".resize");
bday_sound.addEventListener("click", ding);
let bid = document.getElementById('last');

function ding() {
    var sound = new  Audio("piano.mp3");  
    sound.play();
}

let hello;
async function spells(){
    console.log('hello')
    const response = await fetch('https://hp-api.onrender.com/api/spells');
    const all_spells = await response.json();
    hello = Math.floor(Math.random() * all_spells.length);
    console.log(hello);
    return all_spells;
}

function soham(){
    let a = spells();
    console.log(a);
    a.then(data => dib.innerHTML =data[hello].name)
    a.then(data => bid.innerHTML =data[hello].description)
}