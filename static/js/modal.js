var modal;
var close;

async function showModal(film_id) {
    url = "http://127.0.0.1:5000/film/"+ film_id
    let response = await fetch(url)
    let film_data = await response.json()
    modal = document.createElement("div");
    modal.className = "modal"
    let modal_content = document.createElement("div");
    modal_content.className = "modal-content"
    // Create header
    header = document.createElement("div");
    close = document.createElement("span");
    close.className = "close";
    close.textContent += "X";
    close.setAttribute("onclick","closeModal()");
    header.appendChild(close);
    titre = document.createElement("h3");
    titre.textContent += film_data["title"];
    header.appendChild(titre);
    modal_content.appendChild(header);
    // Create modal content
    let img = document.createElement("img")
    img.className = "modal-image"
    img.src = film_data["image_url"] || "./static/img/juststreamit.png"
    modal_content.appendChild(img);
    let ul = document.createElement("ul");
    let info_needed = ["Genre","Date de sortie","Rated","Score Imdb","Réalisateur","Acteurs","Durée","Origine","Box Office","Résumé"]
    let film_data_needed = [film_data["genres"], film_data["date_published"], film_data["rated"],
                            film_data["imdb_score"], film_data["directors"], film_data["actors"], film_data["duration"],
                            film_data["countries"], film_data["worldwide_gross_income"], film_data["description"]
                            ]
    for (i in film_data_needed) {
        let li = document.createElement("li");
        li.textContent += info_needed[i] + ": " + film_data_needed[i];
        ul.appendChild(li)
    }
    modal_content.appendChild(ul)
    modal.appendChild(modal_content)
    // Display modal
    let div = document.getElementById("#f"+film_id);
    div.appendChild(modal)
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
  modal.parentNode.removeChild(modal);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.parentNode.removeChild(modal);
    }
}
