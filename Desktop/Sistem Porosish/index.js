let total = 0;

function showAndUpdateTotal(event) {
  var produkti = event.target.innerText;

  var list = document.getElementById("lista-porosive");
  var li = document.createElement("li");
  li.innerText = produkti;
  list.appendChild(li);

  var cmimi = parseInt(event.target.getAttribute("data-price"));
  total += cmimi;
  document.getElementById("totali").innerHTML = "Totali" + total + " Leke";
}
document
  .querySelectorAll(".first, .second, .third, .forth, .fifth, .sixth, .seventh")
  .forEach((div) => {
    div.addEventListener("click", showAndUpdateTotal);
  });
