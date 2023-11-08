const accessKey= 'jlhNU93wdAocOxXAeiqXKLvaxOdF816pQyCqflSErzs'

const formEl= document.querySelector('form')

const inputEl = document.getElementById("search-input")

const searchResults= document.querySelector('.search-result')
// if we use querryselecter and pass class name then you have to add a . infront of the claas name

const showMore= document.getElementById('show-more')

let inputData= ""
let page = 1
//  inittialize page number

searchImages=async ()=>{
    inputData = inputEl.value

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`


    const response= await fetch(url)
    const data = await response.json()

    const results = data.results

    if(page===1){
        searchResults.innerHTML=""
    }

    results.map((result)=>{
        const imagewrapper= document.createElement('div')

        imagewrapper.classList.add('search-results')



        const image = document.createElement('img')

        image.src = result.urls.small
        image.alt= result.alt_description

        const imageLink = document.createElement('a')
        imageLink.href = result.links.html

        imageLink.target ="_blank"
        imageLink.alt = result.alt_description


        imagewrapper.appendChild(image)
        imagewrapper.appendChild(imageLink)
        searchResults.appendChild(imagewrapper)
    })

    // for increasing page number
    page++

    if(page>1){
        showMore.style.display = 'block'
    }
}


formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page =1
    searchImages()
})

showMore.addEventListener("click",(event)=>{
    
    searchImages()
})







