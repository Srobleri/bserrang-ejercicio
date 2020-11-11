// En este ejercicio tenéis que sustituir TODAS las funciones tradicionales por funciones flecha y que siga funcionando igual.

const changeBackgroundButton = document.getElementById(
  "changeBackgroundButton"
);

changeBackgroundButton.addEventListener("click", function() {
  let color,
  const letters = getLetters();

  this.style.backgroundColor= color => {
    for (var i = 0; i < 6; i++) {
    color= '#'+ letters[Math.floor(Math.random() * 16)];
  }};
});

function getLetters(){
  return '0123456789ABCDEF';
}
