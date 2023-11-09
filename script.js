const quoteText =  document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
author =  document.querySelector(".name");

const buttons = document.querySelectorAll("li");



quoteBtn.addEventListener("click", function(){
    randomQuote()
})

randomQuote()

async function randomQuote (){
    try{
        quoteBtn.innerHTML = 'Loading'
        let quoteGeneration = await fetch("https://quotable.io/random")
        let quote = await quoteGeneration.json()
        quoteText.innerHTML = quote.content
        author.innerHTML = quote.author
        quoteBtn.innerHTML = 'New Quote'
    }
    catch(error) {
        console.log(error , "eror laoding quote")
    }
    
}

buttons[0].addEventListener ("click", function(){
    readAloud()
})

function readAloud (){
let speech = new SpeechSynthesisUtterance (quoteText.textContent + "by" + author.textContent)
    speech.lang = 'en-GB';
    speech.rate = 0.9;

    speechSynthesis.speak(speech)
}

buttons[1].addEventListener("click", function(){
    navigator.clipboard.writeText(quoteText.textContent)
})

buttons[2].addEventListener ("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.textContent}`;

    window.open(tweetUrl, "_blank")
})