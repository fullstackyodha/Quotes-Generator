const quoteContainer = document.querySelector('#quote-container')
const quoteText = document.querySelector('.quote')
const authorText = document.querySelector('#author')
const twitterBtn = document.querySelector('#twitter')
const newQuoteBtn = document.querySelector('#new-quote')


// Get Quote from API
async function getQuote(){
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


    }catch(err){
        console.log(err)
    }
}


// On Load
getQuote()
newQuoteBtn.addEventListener('click', getQuote)