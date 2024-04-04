export function palyaLetrehoz() {
  const LISTA = [];
  for (let index = 0; index < 9; index++) {
    LISTA[i] = lampaAlaphelyzet();
  }
  return LISTA;
}

export function palyaMegjelenit(lista) {
  let txt = "";
  const TAROLO_ELEM = $(".jatekter");
  for (let index = 0; index < lista.length; index++) {
    if (lista[index]) {
      txt += "<div class='eg lampak'></div>";
    } else {
      txt += "<div class='lampak'></div>";
    }
  }
  TAROLO_ELEM.html(txt);
}
