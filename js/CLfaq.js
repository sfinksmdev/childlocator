function showContent(el){
  console.log(el)
  var x = el.nextElementSibling
  if (x.style.display === "none") {
    x.style.display = "block";
    el.style.backgroundColor = '#FFFFFC'
    el.children[1].style.display = 'inline'
    el.children[2].style.display = 'none'
  } else {
    x.style.display = "none";
    el.style.backgroundColor = '#4974B8'
    el.children[1].style.display = 'none'
    el.children[2].style.display = 'inline'
  }
}

var btns = document.getElementsByClassName("btnAccordeon");
for (var i = 0; i < btns.length; i++) {
   btns.item(i).nextElementSibling.style.display = 'none'
   btns.item(i).children[1].style.display = 'none'
   btns.item(i).addEventListener("click", function () { showContent(this) });
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


var btnsFAQ = document.getElementsByClassName("btnFAQ");
for (var i = 0; i < btnsFAQ.length; i++) {
  btnsFAQ.item(i).addEventListener("click", function () {
    modal.style.display = "block";
    console.log(this.dataset.image)
    var imgEl = document.getElementById("modal-image")
    console.log(window.innerWidth)
    if(window.innerWidth < 550){
      imgEl.style.width = '100%';
    } else {
      imgEl.style.width = '400px';
    }
    imgEl.src = "img/CLImg/"+this.dataset.image
  });
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

console.log('CLLoadedd!')
