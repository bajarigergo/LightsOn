export function lekapcsoltSzamlalo(lista) {
    let szamlalo = 0;
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] == false){
            szamlalo += 1;
        }
    }
    return szamlalo
}

export function kiiratas(szamlalo){
    const ELEM = $("#lekapcsolt")
    ELEM.html(szamlalo)
}