const tipos = ["reel", "carousel", "historia"];
const temas = ["detras de camaras", "consejo valioso", "featuring place", "showcase"];
const moods = ["romantic", "fashion", "party", "adventure"];

const generateBtn = document.getElementById("generateBtn");
const contentDiv = document.getElementById("content");

generateBtn.addEventListener("click", () => {
  const tipo = getRandomElement(tipos);
  const tema = getRandomElement(temas);
  const mood = getRandomElement(moods);

  const contenidoEspecial = `${tipo} - ${tema} - ${mood}`;
  
  contentDiv.innerText = contenidoEspecial;
});

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
