import { palyaLetrehoz, palyaMegjelenit } from "./dd.js";
import { lekapcsoltSzamlalo, kiiratas, ujJatek } from "./bs.js";
import { lampaValt } from "./bg.js";

function jatekLetrehoz() {
  const LISTA = palyaLetrehoz();
  palyaMegjelenit(LISTA);
  lampaValt(LISTA);
  kiiratas(lekapcsoltSzamlalo(LISTA));
  ujJatek();
}
jatekLetrehoz();
