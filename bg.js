import { kiiratas, lekapcsoltSzamlalo } from "./bs.js";

export function lampaAlaphelyzet() {
  let szam = Math.floor(Math.random() * 100 + 1);
  return szam <= 20;
}
export function lampaValt(LISTA) {
  const ELEM = $(".lampak");
  ELEM.on("click", function (event) {
    $(event.target).toggleClass("eg");
    if (LISTA[event.target.id] == true) {
      LISTA[event.target.id] = false;
    } else {
      LISTA[event.target.id] = true;
    }
    kiiratas(lekapcsoltSzamlalo(LISTA));
    if (nyertEllenoriz(LISTA)) {
      nyertKiir();
      window.location.reload();
    }
  });
}

function nyertEllenoriz(lista) {
  let i = 0;
  while (i < lista.length && lista[i] == false) {
    i++;
  }
  return i >= lista.length;
}

function nyertKiir() {
  alert("Hurrá, meghosszabítottad a Föld életét!");
}
