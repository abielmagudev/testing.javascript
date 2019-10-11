let tuto = 'Curso NodeJS'
console.log(tuto)
debugger;

unoMasUno = () => {
    debugger;
    return 1 + 1;
}
unoMasDos = () => {
    debugger;
    return 1 + 2;
}
debugger;
console.log( unoMasUno() )

// node inspect app.js
// Avanzar siguiente linea: n
// Avanzar hasta el final: c
// Ver lista de lineas: list(n = numero_lineas)
// REPL: Read Eval Print Loop ver la linea ejecutandose | Ctrl+C - exit
// debugger: bandera donde debe detenerse cuando se usa "c"
//  Instalar nodemon
// Chrome Dev Tools