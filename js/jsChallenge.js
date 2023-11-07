function challenge1(element) {
  if (element.checked) {
    document.querySelector("#emailDiv").style.display = "block";
  } else {
    document.querySelector("#emailDiv").style.display = "none";
  }
}

function challenge2() {
  let bill = document.querySelector("#bill");
  let home = document.querySelector("#home");
  if (document.querySelector("#sameAddress").checked) {
    home.value = bill.value;
  }
}

document.querySelector("#sameAddress").addEventListener("click", challenge2());
