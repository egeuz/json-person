const text = document.getElementById("text");

window.addEventListener("DOMContentLoaded", () => { renderData(json.ege) });

function renderData(data) {
  text.innerHTML = parseLinks(data);
  document.querySelectorAll(".link").forEach(link => {
    link.addEventListener("click", () => {
      const key = event.target.innerHTML.toLowerCase().replace(/[^\w\s]|_/g, "");
      renderData(json[key]);
    })
  });
}

function parseLinks(text) {
  return text.split(" ").map(word => {
    const key = word.toLowerCase().replace(/[^\w\s]|_/g, "");
    return (json[key]) ? `<a class="link">${word}</a>` : word;
  }).join(" ");
}