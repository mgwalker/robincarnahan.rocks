const loveLetters = [];

const buildings = [
  ["Alaska", "ak.jpg"],
  ["Alabama", "al.jpg"],
  ["American Samoa", "as.jpg"],
  ["Arizona", "az.jpg"],
  ["California", "ca.jpg"],
  ["Colorado", "co.jpg"],
  ["Connecticut", "ct.jpg"],
  ["District of Columbia", "dc.jpg"],
  ["Delaware", "de.jpg"],
  ["Florida", "fl.jpg"],
  ["Georgia", "ga.jpg"],
  ["Guam", "gu.jpg"],
  ["Hawaii", "hi.jpg"],
  ["Iowa", "ia.jpg"],
  ["Idaho", "id.jpg"],
  ["Illinois", "il.jpg"],
  ["Indiana", "in.jpg"],
  ["Kansas", "ks.jpg"],
  ["Kentucky", "ky.jpg"],
  ["Louisiana", "la.jpg"],
  ["Massachusetts", "ma.jpg"],
  ["Maryland", "md.jpg"],
  ["Maine", "me.jpg"],
  ["Michigan", "mi.jpg"],
  ["Minnesota", "mn.jpg"],
  ["Missouri", "mo.jpg"],
  ["Northern Mariana Islands", "mp.jpg"],
  ["Mississippi", "ms.jpg"],
  ["Montana", "mt.jpg"],
  ["North Carolina", "nc.jpg"],
  ["North Dakota", "nd.jpg"],
  ["Nebraska", "ne.jpg"],
  ["New Hampshire", "nh.jpg"],
  ["New Jersey", "nj.jpg"],
  ["New Mexico", "nm.jpg"],
  ["Nevada", "nv.jpg"],
  ["New York", "ny.jpg"],
  ["Ohio", "oh.jpg"],
  ["Oklahoma", "ok.jpg"],
  ["Oregon", "or.jpg"],
  ["Pennsylvania", "pa.jpg"],
  ["Puerto Rico", "pr.jpg"],
  ["Rhode Island", "ri.jpg"],
  ["South Carolina", "sc.jpg"],
  ["South Dakota", "sd.jpg"],
  ["Tennessee", "tn.jpg"],
  ["Texas", "tx.jpg"],
  ["Utah", "ut.jpg"],
  ["Virginia", "va.jpg"],
  ["US Virgin Islands", "vi.jpg"],
  ["Vermont", "vt.jpg"],
  ["Washington", "wa.jpg"],
  ["Wisconsin", "wi.jpg"],
  ["West Virginia", "wv.jpg"],
  ["Wyoming", "wy.jpg"],
  ["Connecticut: That guy knows the way!", "ct-guy.jpg"],
  ["The Genius of Connecticut, from the State Capitol", "ct-genius.jpg"],
  ["Connecticut: The Eastern Bloc Hotel", "ct-eastern-bloc.jpg"],
  ["Captain Robin takes to the skies!", "robin-flying.jpg"],
  ["Lasso you up some savings!", "robin-lasso.jpg"],
  ["Robin the Cost-Saver", "robin-savings.jpg"]
];

const backups = [];

const random = list => {
  const backup =
    backups.find(({ backup }) => backup === list) ||
    backups[
      backups.push({
        backup: list,
        items: []
      }) - 1
    ];

  if (list.length === 0) {
    list.push(...backup.items);
    backup.items.length = 0;
  }

  const i = Math.floor(Math.random() * list.length);

  const item = list[i];
  backup.items.push(item);
  list.splice(i, 1);

  return item;
};

const getLoveLetters = async () => {
  const response = await fetch("💌.txt");
  const letters = await response.text();
  loveLetters.push(...letters.split("\n"));
};

const setLoveLetter = () => {
  console.log(loveLetters.length);
  document.getElementById("❤️").innerText = random(loveLetters);
};

const setStateBackground = () => {
  const [name, img] = random(buildings);
  document.getElementById(
    "everything"
  ).style.backgroundImage = `url(buildings/${img})`;
  document.getElementById("state").innerText = name;
};

const onLoad = async () => {
  setStateBackground();

  await getLoveLetters();
  setLoveLetter();
};

window.addEventListener("DOMContentLoaded", onLoad);

window.addEventListener("click", () => {
  setLoveLetter();
  setStateBackground();
});
