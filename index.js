import { palyaLetrehoz, palyaMegjelenit } from "./dd.js";
import { lekapcsoltSzamlalo, kiiratas } from "./bs.js";

function jatekLetrehoz() {
  const LISTA = palyaLetrehoz();
  palyaMegjelenit(LISTA);
  kiiratas(lekapcsoltSzamlalo(LISTA));
}
jatekLetrehoz();
