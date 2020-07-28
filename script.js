// Get Quote from API
async function getQuote(){
    const proxy = `https://desolate-depths-75938.herokuapp.com/`
    const apiUrl = `http://api.forismatic.com/api/1.0/?method=getQuote$lang=en&format=json`

    try{
        const response = await fetch(proxy + apiUrl)
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}


// On Load
getQuote()