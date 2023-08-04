let avionVel= 270;
let avionAlt=150;

let aterrizarAvion= (avionVel >=268 && avionVel<=278) && (avionAlt>=150 && avionAlt<=300);
aterrizarAvion? console.log("El avion tiene permiso de aterrizar"):console.log("El avion no puede aterrizar");