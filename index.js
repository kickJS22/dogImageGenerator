let quantity = 2;

function createImage(link){
    const img = document.createElement("img");
    const div = document.querySelector("#container")
    img.src = link;
    img.className = "createdImg";
    console.log(link)
    document.body.insertBefore(img, div)
}

function load() {
    console.log("ha scroleado")
    for(i = 0; i != quantity; i++){
        if(i >= quantity){
            break;
        }
        fetch("https://dog.ceo/api/breeds/image/random")
        .then (response => {return response.json()})
        .then (data => {
            createImage(data.message)
        })
        .catch(err => {console.log(err)
            console.log("There is no image avaible")
        })
    }



}

window.addEventListener ("DOMContentLoaded", () => {
    load()
    generateCheck();
})



window.onscroll = () => {
    generateCheck();
}

function generateCheck (){
    let comparate = window.scrollY + window.innerHeight
    if ( comparate >= document.body.offsetHeight){
        setInterval(load(), 2000)
        
        
    } else if(window.innerHeight >= document.body.offsetHeight) {
        setInterval(load(), 2000)
    } else {
        return undefined
    }
}
