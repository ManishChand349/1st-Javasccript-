const paragraph = document.getElementById("my-paragraph");
const words = paragraph.innerHTML.split(" ");
const highlightedWords = words.filter(word => word.length > 8);

highlightedWords.forEach(word => {
  const regex = new RegExp(word, "");
  paragraph.innerHTML = paragraph.innerHTML.replace(regex, `<span style="background-color: yellow">${word}</span>`);
});
