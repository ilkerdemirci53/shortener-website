const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
//Events
btn.addEventListener("click", navToggle);
linkForm.addEventListener("submit", formSubmit);

//Valid URL Funct
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}
// Hamburger Menu
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
// Error & Success
function formSubmit(e) {
  e.preventDefault();
  if (input.value === "") {
    errMsg.innerHTML = "Please enter something.";
    input.classList.add("border-rose-600");
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "Please enter a valid URL.";
    errMsg.classList.remove("text-emerald-600");
    errMsg.classList.add("text-red");
    input.value = "";
    input.classList.add("border-rose-600");
  } else {
    errMsg.classList.remove("text-red");
    errMsg.classList.add("text-emerald-600");
    errMsg.innerHTML = "Success";
    input.classList.remove("border-rose-600");
    input.value = "";
    input.classList.add("border-emerald-600");
  }

  setTimeout(cleanInput, 3000);
}

function cleanInput() {
  input.classList.remove("border-rose-600");
  input.classList.remove("border-emerald-600");
  errMsg.innerHTML = "";
}
