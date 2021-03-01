/* Variables */
const titleText = document.querySelector('.title-text');
const jokePlaceholder = document.querySelector('.jokes-content');
const generateJokeButton = document.querySelector('.generate-jokes');
const ultimateJoke = document.querySelector('.ultimate-joke');

/* Event listeners */

document.addEventListener('DOMContentLoaded', () =>{
    generateJokeButton.addEventListener('click', generateNewJoke);
    ultimateJoke.addEventListener('click', generateUltiJoke);

})

/* Functions */

async function generateNewJoke(){
    
    jokePlaceholder.innerHTML = "";
    titleText.innerHTML = "PROGRAMMING JOKES!";
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
    const data =  await res.json();

    if(data.delivery){
        jokePlaceholder.innerHTML = `${data.setup} <br> ${data.delivery}`;
    }
    else{
        jokePlaceholder.innerHTML = `${data.joke}`;
    }
}

function generateUltiJoke(){
    titleText.innerHTML = "THE ULTIMATE JOKE!";
    jokePlaceholder.innerHTML = "Look into a mirror";
}