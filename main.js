const buildings = [
  ["Alabama", "al.jpg"],
  ["Missouri", "mo.jpg"]
];

const random = list => list[Math.floor(Math.random() * list.length)];

const getLoveLetters = async () =>
  (await (await fetch("💌.txt")).text()).split("\n");

const setLoveLetter = letter => {
  document.getElementById("❤️").innerText = letter;
};

const setStateBackground = () => {
  const [name, img] = random(buildings);
  document.getElementById("building").src = `buildings/${img}`;
  document.getElementById("state").innerText = name;
};

const onLoad = async () => {
  setStateBackground();

  const loveLetters = await getLoveLetters();
  setLoveLetter(random(loveLetters));
};

window.addEventListener("DOMContentLoaded", onLoad);
