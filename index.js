import { palyaLetrehoz, palyaMegjelenit } from "./dd.js";
import { lekapcsoltSzamlalo, kiiratas } from "./bo.js";

function jatekLetrehoz() {
  const LISTA = palyaLetrehoz();
  palyaMegjelenit(LISTA);
  kiiratas(lekapcsoltSzamlalo(LISTA));
}
