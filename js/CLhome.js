console.log('llld')


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption


var img = [document.getElementById("s1")];
var modalImg = document.getElementById("ms");
modalImg.style.maxWidth = "500px"
var captionText = document.getElementById("caption");
var i;
for (i = 2; i < 10; i++) {
  img.push(document.getElementById("s"+i))
}


for (i = 0; i < 9; i++) {
  img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
