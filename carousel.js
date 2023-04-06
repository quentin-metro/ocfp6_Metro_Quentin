var slideshows = [];

function initCarousels() {
    containers = document.getElementsByClassName("slideshow-container");
    for (let i = 0; i < containers.length; i++) {
        var slideshow = containers[i]
        slideshow.currentSlideIndex = 1;
        showSlides(slideshow.currentSlideIndex, slideshow);
        let prev = document.createElement("a");
        prev.className = "prev";
        prev.setAttribute("onclick","plusSlides(-1, " + i.toString() + ")");
        prev.textContent += '\u{276E}';
        slideshow.appendChild(prev);
        let next = document.createElement("a");
        next.className = "next";
        next.setAttribute("onclick","plusSlides(1, " + i.toString() + ")");
        next.textContent += '\u{276F}';
        slideshow.appendChild(next);
        slideshows[i] = slideshow
    }
}



function plusSlides(n, no) {
  var slideshow = slideshows[no];
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, no) {
  var slideshow = slideshows[no];
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("itemImage");
  if (slides.length > 0){
      if (n > slides.length) {slideshow.currentSlideIndex = 1}
      if (n < 1) {slideshow.currentSlideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideshow.currentSlideIndex-1].style.display = "block";
  }
}

initCarousels();
