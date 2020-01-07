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
  ["Wyoming", "wy.jpg"]
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
