const title = document.getElementById("title");
const text = document.getElementById("text");
const back = document.getElementById("back");

const history = ["ege"];

const renderData = () => {
  let key = history[history.length - 1];
  let content = json[key];
  console.log(text);

  title.innerHTML = key.replace(key[0], key[0].toUpperCase());
  text.innerHTML = parseLinks(content);

  document.querySelectorAll(".link").forEach(link => {
    link.addEventListener("click", (event) => {
      const key = event.target.innerHTML.toLowerCase().replace(/[^\w\s]|_/g, "");
      history.push(key);
      renderData();
    });
  });
}

const parseLinks = (text) => text.split(" ").map(word => {
  const key = word.toLowerCase().replace(/[^\w\s]|_/g, "");
  return (json[key]) ? `<a class="link">${word}</a>` : word;
}).join(" ");

window.addEventListener("DOMContentLoaded", () => {
  back.disabled = history.length <= 1;
  renderData();
});

back.addEventListener("click", () => {
  history.pop();
  renderData();
});

document.addEventListener("click", () => {
  back.disabled = history.length <= 1;
})