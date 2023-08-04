/* 1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa traductor condicional. La idea es que si el usuario ingresa
una palabra como “perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le devuelva la
misma palabra traducida al idioma inglés. Te recomendamos usar la estructura
switch. Puedes ayudarte con Google Traductor.
En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario un mensaje
que le informe que “La palabra ingresada es incorrecta”.*/
let word="PERRO";
switch(word.toLowerCase()){
    case "perro":console.log("dog");
    break;
    case "gato":console.log("cat");
    break;
    case "puerta":console.log("door");
    break;
    case "ventana":console.log("wimdow");
    break;
    case "mesa":console.log("table");
    break;
    default:console.log("la palabra ingresada es incorrecta");
}