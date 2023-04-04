
url2 = "http://127.0.0.1:5000/bestalltime"
url4 = "http://127.0.0.1:5000/worst"
url3 = "http://127.0.0.1:5000/genre/romance"

const createImgInDiv = function(id_block,film_url,film_id){
    let img = document.createElement("img")
    img.id = "#film" +film_id
    img.className = "test"
    img.src = film_url || "juststreamit.png"
    let block = document.getElementById(id_block);
    block.appendChild(img);
}

const createAFilm = function(id_carousel,film_url,film_id){
    let div = document.createElement("div")
    div.className = "itemImage"
    let block2 = document.getElementById(id_carousel)
    block2.appendChild(div)
    let a = document.createElement("a")
    a.className = "js-modal"
    a.id='#f'+id_carousel+film_id
    a.href = '#'
    div.appendChild(a)
    createImgInDiv(a.id,film_url,film_id)
}

const best8film = async function(){
    url = "http://127.0.0.1:5000/best"
    let response = await fetch(url)
    let film_data = await response.json()
    // The best in picture
    let h3 = document.createElement("h3")
    h3.innerHTML = film_data["0"]["title"]
    let block1 = document.getElementById("best1")
    block1.appendChild(h3)
    createImgInDiv("best1",film_data["0"]["image_url"],film_data["0"]["id"])
    // 7 other best film
    for (let i=1; i <= 7; i++){
        createAFilm("best",film_data[i]["image_url"],film_data[i]["id"])
    }
}

const best8alltime = async function(){
    url = "http://127.0.0.1:5000/bestalltime"
    let response = await fetch(url)
    let film_data = await response.json()
    for (let i=0; i <= 7; i++){
        createAFilm("bestalltime",film_data[i]["image_url"],film_data[i]["id"])
    }
}

const worst8film = async function(){
    url = "http://127.0.0.1:5000/worst"
    let response = await fetch(url)
    let film_data = await response.json()
    for (let i=0; i <= 7; i++){
        createAFilm("worst",film_data[i]["image_url"],film_data[i]["id"])
    }
}

const best8romance = async function(){
    url = "http://127.0.0.1:5000/genre/romance"
    let response = await fetch(url)
    let film_data = await response.json()
    for (let i=0; i <= 7; i++){
        createAFilm("romance",film_data[i]["image_url"],film_data[i]["id"])
    }
}

best8film()
best8alltime()
worst8film()
best8romance()