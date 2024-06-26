import { lampaAlaphelyzet } from "./bg.js";

export function palyaLetrehoz() {
  const LISTA = [];
  for (let index = 0; index < 9; index++) {
    LISTA[index] = lampaAlaphelyzet();
  }
  if (LISTA.indexOf(true) < 0) {
    LISTA[Math.floor(Math.random() * 8 + 0)] = true;
  }
  return LISTA;
}

export function palyaMegjelenit(lista) {
  let txt = "";
  const TAROLO_ELEM = $(".jatekter");
  for (let index = 0; index < lista.length; index++) {
    if (lista[index]) {
      txt += `<div id=${index} class='eg lampak'></div>`;
    } else {
      txt += `<div id=${index} class='lampak'></div>`;
    }
  }
  TAROLO_ELEM.html(txt);
}
