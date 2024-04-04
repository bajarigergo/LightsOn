import { palyaLetrehoz, palyaMegjelenit } from "./dd.js";
import { lekapcsoltSzamlalo, kiiratas } from "./bs.js";
import { lampaValt } from "./bg.js";

function jatekLetrehoz() {
  const LISTA = palyaLetrehoz();
  palyaMegjelenit(LISTA);
  lampaValt();
  kiiratas(lekapcsoltSzamlalo(LISTA));
}
jatekLetrehoz();
