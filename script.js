const quoteContainer = document.querySelector('#quote-container')
const quoteText = document.querySelector('.quote')
const authorText = document.querySelector('#author')
const twitterBtn = document.querySelector('#twitter')
const newQuoteBtn = document.querySelector('#new-quote')
const loader = document.querySelector('.loader')

function loading(){
    loader.hidden = false
    quoteContainer.hidden = true
}

function complete(){

    if(!loader.hidden){
        quoteContainer.hidden = false // show
        loader.hidden = true // hide
    }
}
// Get Quote from API
async function getQuote(){

    loading()

    const proxy = 'https://desolate-depths-75938.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

    try{
        const response = await fetch(proxy + apiUrl)
        const data = await response.json()

        if(data.quoteAuthor === ''){
            authorText.innerText = "~ Unknown"
        }else{
            authorText.innerText = `~ ${data.quoteAuthor}`
        }


        if(data.quoteText.length > 50){
            quoteText.classList.add("long-quote")
        }else{
            quoteText.classList.remove("long-quote")
        }

        quoteText.innerText = data.quoteText

        complete()

    }catch(err){
        getQuote()
    }
}


function tweetQuote(){
    const quote = quoteText.innerText
    const author = authorText.innerText

    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}` 

    window.open(twitterUrl, '_blank')
}


// On Load
newQuoteBtn.addEventListener('click', getQuote)
twitterBtn.addEventListener('click', tweetQuote)
getQuote()