function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function changeImg(){
  document.querySelector('.img-btn-orc').src = "img/Botão mouse over.png"
}

function mouseOut() {
  document.querySelector('.img-btn-orc').src = "img/Botão normal.png"
}