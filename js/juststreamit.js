
url2 = "http://127.0.0.1:5000/bestalltime"
url4 = "http://127.0.0.1:5000/worst"
url3 = "http://127.0.0.1:5000/genre/romance"

const createImgInDiv = function(div_id,film_url,film_id){
    let img = document.createElement("img")
    img.id = "#film" +film_id
    img.className = "filmimage"
    img.setAttribute("onclick","showModal(" + film_id + ")");
    img.src = film_url || "juststreamit.png"
    let div = document.getElementById(div_id);
    div.appendChild(img);
}

const createAFilm = function(id_carousel,film_data){
    let block = document.getElementById(id_carousel)
    let div = document.createElement("div")
    div.id = '#f' + film_data["id"]
    div.className = "itemImage"
    // Only the first image in a slideshow is visible
    if (block.getElementsByClassName("itemImage").length < 4){
        div.style.display = "block"
    } else {
        div.style.display = "none"
    }
    block.appendChild(div)
    createImgInDiv(div.id, film_data["image_url"], film_data["id"])
}

const best8film = async function(){
    url = "http://127.0.0.1:5000/best"
    let response = await fetch(url)
    let film_data = await response.json()
    // The best in picture
    let block1 = document.getElementById("best1")
    let h3 = document.createElement("h3")
    h3.innerHTML = film_data["0"]["title"]
    block1.appendChild(h3)
    let p = document.createElement("p")
    let best_id = film_data["0"]["id"]
    let best_response = await fetch("http://127.0.0.1:5000/film/"+ best_id)
    let best_data = await best_response.json()
    p.innerHTML = best_data["description"]
    block1.appendChild(p)
    createAFilm("best1",film_data["0"])
    // 7 other best film
    for (let i=1; i <= 7; i++){
        createAFilm("best",film_data[i])
    }
}

const best8alltime = async function(){
    url = "http://127.0.0.1:5000/bestalltime"
    let response = await fetch(url)
    let film_data = await response.json()
    for (let i=0; i <= 7; i++){
        createAFilm("bestalltime",film_data[i])
    }
}

const worst8film = async function(){
    url = "http://127.0.0.1:5000/worst"
    let response = await fetch(url)
    let film_data = await response.json()
    for (let i=0; i <= 7; i++){
        createAFilm("worst",film_data[i])
    }
}

const best8romance = async function(){
    url = "http://127.0.0.1:5000/genre/romance"
    let response = await fetch(url)
    let film_data = await response.json()
    for (let i=0; i <= 7; i++){
        createAFilm("romance",film_data[i])
    }
}

best8film();
best8alltime();
worst8film();
best8romance();
