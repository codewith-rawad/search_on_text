var image = document.getElementById("image");
var input = document.getElementById("in");
var para = document.getElementById("paragraph");
image.addEventListener("click", function () {
  let width = window.getComputedStyle(input).getPropertyValue("width");
  if (width === "0px") {
    input.style.width = "400px";
    input.style.transition = "2s";
  } else {
    input.style.width = "0px";
  }
});

input.addEventListener("input", function () {
  let m = input.value;
  let paraText = para.textContent;
  let regex = new RegExp(`${m}`, "gi");
  let highlightedText = paraText.replace
  (regex, (match) => {
  return `<span style="color: black;
  font-weight: bold;">${match}</span>`;});
  para.innerHTML = highlightedText;
});
