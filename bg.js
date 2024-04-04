export function lampaAlaphelyzet() {
  let szam = Math.floor(Math.random() * 100 + 1);
  return szam <= 20;
}
export function lampaValt() {
  const ELEM = $(".lampak");
  for (let index = 0; index < ELEM.length; index++) {
    ELEM[index].on("click", function () {
      ELEM.toggleClass("eg");
    });
  }
}
