export function lampaAlaphelyzet() {
  let szam = Math.floor(Math.random() * 100 + 1);
  return szam <= 20;
}
export function lampaValt() {
  const ELEM = $(".lampak");

  ELEM.on("click", function (event) {
    console.log(event.target.id);
    $(event.target).toggleClass("eg");
  });
}
