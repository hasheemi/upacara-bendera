let url = "https://meizano.github.io/Tutorial-Web/asset/Indonesia-Raya.mp3";
let audio = new Audio(url);
let isplaying = false;
let muje = document.getElementById("muje");
let ulang = document.getElementById("ulang");
let tiang = document.getElementById("tiang");
let teks = document.getElementsByTagName("h2")[0];
let bendera = document.getElementById("bendera");
let kecepatan = 300 / 109;

let posisi = 50;
let interval;
function kibar() {
  posisi <= 350
    ? (posisi += kecepatan)
    : (clearInterval(interval),
      (muje.style = "display:none"),
      (teks.style = "display:block"));
  // console.log(posisi);
  bendera.style = `display:block;bottom:${posisi + kecepatan}px`;
}
function mulai() {
  interval = setInterval(kibar, 1000);
}
function jeda() {
  clearInterval(interval);
}
muje.onclick = () => {
  teks.style = "display:none";
  if (!isplaying) {
    audio.play();
    muje.innerText = "jeda";
    isplaying = true;
    mulai();
  } else {
    audio.pause();

    muje.innerText = "mulai";
    jeda();
    bendera.style = `display:block;bottom:${posisi + kecepatan}px`;
    isplaying = false;
  }
};
ulang.onclick = () => {
  teks.style = "display:none";
  audio.pause();
  audio.currentTime = 0;
  muje.innerText = "mulai";

  muje.style = "display:block";
  jeda();
  posisi = 50;
  bendera.style = `display:none;bottom:${posisi}px`;
  isplaying = false;
};
// function jeda() {
//   clearInterval(kibar);
// }
// audio.play();
