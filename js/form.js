
function cambia_cremas(listindex)
{

document.tortas.cremas.options.length = 0;
switch (listindex)
{

case "DULCE DE LECHE REPOSTERO" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN SABOR --","-- ELIJA UN SABOR --");
document.tortas.cremas.options[1]=new Option("CREMA PASTELERA","CREMA PASTELERA");
document.tortas.cremas.options[2]=new Option("CREMA CHOCOLATE BLANCO","CREMA CHOCOLATE BLANCO");
document.tortas.cremas.options[3]=new Option("CHANTILLY","CHANTILLY");
document.tortas.cremas.options[4]=new Option("CHANTILLY CON FRUTOS ROJOS","CHANTILLY CON FRUTOS ROJOS");
document.tortas.cremas.options[5]=new Option("CREMA MOCCA","CREMA MOCCA");
document.tortas.cremas.options[6]=new Option("GANACHE DE CHOCOLATE NEGRO","GANACHE DE CHOCOLATE NEGRO");

break;

case "GANACHE DE CHOCOLATE NEGRO" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN SABOR --","-- ELIJA UN SABOR --");
document.tortas.cremas.options[1]=new Option("COMBINADO DE REPOSTERO CON CHANTILLY","COMBINADO DE REPOSTERO CON CHANTILLY");
document.tortas.cremas.options[2]=new Option("CHANTILLY","CHANTILLY");
document.tortas.cremas.options[3]=new Option("CHANTILLY CON FRUTOS ROJOS","CHANTILLY CON FRUTOS ROJOS");
document.tortas.cremas.options[4]=new Option("CREMA MOCCA","CREMA MOCCA");
document.tortas.cremas.options[5]=new Option("CREMA PASTELERA","CREMA PASTELERA");
document.tortas.cremas.options[6]=new Option("CREMA CHOCOLATE BLANCO","CREMA CHOCOLATE BLANCO");
  
break;

case "GANACHE BLANCO CON MARROC" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN SABOR --","-- ELIJA UN SABOR --");
document.tortas.cremas.options[1]=new Option("CHANTILLY","CHANTILLY");
document.tortas.cremas.options[2]=new Option("CREMA MOCCA","CREMA MOCCA");
document.tortas.cremas.options[3]=new Option("DULCE DE LECHE REPOSTERO","DULCE DE LECHE REPOSTERO");

break;

case "COMBINADO DE REPOSTERO CON GANACHE NEGRO" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN SABOR --","-- ELIJA UN SABOR --");
document.tortas.cremas.options[1]=new Option("CHANTILLY","CHANTILLY");
document.tortas.cremas.options[2]=new Option("CHANTILLY CON FRUTOS ROJOS","CHANTILLY CON FRUTOS ROJOS");

break;

}
return true;
}

 //RELLENOS CON BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 10 PORCIONES

 function precio(){
   
  let bizcochuelo = document.querySelector("#bizcochuelo").value;
  let listacremas = document.querySelector("#listacremas").value;
  let cremas = document.querySelector("#cremas").value; 
  let decoracion = document.querySelector("#decoracion").value;
  let tamaño = document.querySelector("#tamaño").value;
  
  
if(bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3000";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3360";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2920";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3060";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3420";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2480";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2970";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3660";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2720";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3210";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3310";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3670";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2730";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3220";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3350";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3710";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2770";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3260";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3320";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3680";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2740";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3230";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3460";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3820";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2890";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3370";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3860";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2930";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3420";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3510";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3870";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2940";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3910";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2980";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3210";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3570";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2640";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3120";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3210";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3570";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2640";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3120";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3570";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3930";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2990";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3480";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3620";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3980";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3040";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3530";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3380";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3740";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2810";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3290";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3760";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2830";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3310";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3410";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3770";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2840";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3320";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas === "DULCE DE LECHE REPOSTERO" && cremas === "CREMA PASTELERA" && decoracion === "CREMA DE LECHE" && tamaño === "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3200";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3560";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2630";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3110";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3260";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3620";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2680";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3170";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3860";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2920";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3410";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3510";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3870";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2930";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3420";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3550";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3910";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2970";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3460";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3520";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3880";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2940";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3430";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3660";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4020";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3090";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3570";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4060";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3130";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3610";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3710";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4070";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3140";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3620";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4110";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3180";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3660";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3410";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3770";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2830";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3320";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3460";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3820";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2890";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3370";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3770";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4130";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3190";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3680";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3820";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4180";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3240";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3730";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3580";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3940";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3010";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3490";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3960";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3020";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3510";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3610";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3970";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3030";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3520";
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4870";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3290";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4080";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4700";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5030";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3440";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4990";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5310";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3730";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4520";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3640";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3840";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4630";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5120";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5440";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3850";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4650";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5310";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5630";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4050";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4840";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5820";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5030";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5410";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5740";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4940";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5610";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5940";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4350";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5140";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5060";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5390";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3800";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4590";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5060";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5390";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3800";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4590";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5790";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4210";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5000";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5580";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5910";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4320";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5110";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5090";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5410";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3830";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4620";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5570";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3980";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4770";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5160";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5480";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4690";
}


//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4760";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5080";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4290";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4910";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5240";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3650";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4440";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5190";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5520";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3930";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4730";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5110";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5440";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3850";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4640";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5310";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5630";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4050";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5840";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5320";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5650";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4060";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4850";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5510";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5840";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4250";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5050";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6030";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4440";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5240";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5620";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5950";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4360";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5150";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5820";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6140";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4560";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5350";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5270";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5590";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4010";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5420";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4160";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4950";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5680";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6000";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4410";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5210";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5790";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6110";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4530";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5320";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5290";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5620";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4030";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4820";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5780";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4190";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4980";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5360";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5690";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4900";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5560";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5920";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3970";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4920";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5790";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6020";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6380";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5380";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6000";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6360";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4410";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5360";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6130";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6490";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4540";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6810";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4860";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5810";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6650";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7010";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5060";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6020";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6840";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5250";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6810";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7170";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6180";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6950";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7310";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5360";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6310";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6370";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6730";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4780";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5730";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6370";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6730";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4780";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5730";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6860";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4910";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5860";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6610";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6970";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5020";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5970";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6110";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4520";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5470";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6790";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4840";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5790";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6410";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6770";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4820";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5770";
}


//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5950";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6310";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4360";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5310";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6180";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6540";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4590";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5550";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6420";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6780";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4830";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5780";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6390";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6760";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4810";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5760";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6560";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6920";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4970";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5920";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6840";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7200";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5260";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6210";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7050";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7410";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5460";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6410";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7230";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7590";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5650";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7210";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7570";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5620";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6570";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7730";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5790";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6740";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6770";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7130";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5180";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6130";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7000";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7360";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5410";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6360";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6790";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7150";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5200";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6150";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6930";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7290";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5340";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6290";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6760";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4810";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5760";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6820";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7190";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5240";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6190";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7160";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5210";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6160";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6770";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4460";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5570";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6760";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7060";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4750";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5860";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6960";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7260";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4950";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6060";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7080";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7380";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5060";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6170";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7130";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5120";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7350";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7650";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5340";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6450";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7540";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7840";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5530";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6640";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7730";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8030";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5720";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6820";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7840";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8140";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5830";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6940";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5880";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6990";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7540";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5220";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6330";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7540";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5220";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6330";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7520";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7820";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5510";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6610";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7690";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7990";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5670";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6780";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7140";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7440";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5130";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6240";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7350";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7650";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5330";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6440";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7460";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7760";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6560";
}


//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7020";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7320";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5010";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6110";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7300";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5290";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7510";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7810";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6610";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7620";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7920";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5610";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6720";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7680";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7980";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5660";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6770";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7900";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8200";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5890";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7000";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8090";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8390";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6070";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7180";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8270";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8570";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6260";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8390";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8690";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7480";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8440";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8740";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6430";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7540";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7780";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8080";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5770";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6880";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8070";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6060";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7170";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7740";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8040";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5730";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6840";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7910";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8210";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5900";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7010";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7670";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5360";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6470";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7890";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8190";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5880";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6990";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8000";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8300";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5990";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7100";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9420";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5390";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6970";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8440";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9620";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5790";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7170";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9120";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6260";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7850";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9030";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10210";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6180";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7770";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9280";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10460";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8010";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10580";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8130";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9700";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10880";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6850";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10000";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11170";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7140";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8730";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9910";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11090";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7060";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8640";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10160";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11330";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8890";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9120";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6270";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7850";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9120";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6270";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7850";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9940";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11110";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7080";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8670";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11270";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8830";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9340";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10520";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6490";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8070";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9560";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10730";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6700";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8290";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10650";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6620";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8200";
}


//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8910";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$10090";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6060";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7640";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9110";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$10290";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6260";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7840";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9790";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$10960";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6930";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8520";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$10880";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6850";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8430";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9950";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$11120";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7090";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8680";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$10070";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$11250";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7220";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8800";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11550";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7520";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10670";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11840";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7810";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10580";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11760";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7730";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9310";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10830";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12000";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7970";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9560";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9790";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10970";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6940";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8520";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9990";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11170";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7130";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8720";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10610";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11780";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9340";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10770";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11940";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7910";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10010";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11190";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7160";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8740";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10230";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8960";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10140";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11320";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7290";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8970";
}
else{}
}

document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();
    
  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "5493816069735";

  let cliente = document.querySelector("#cliente").value;
  let bizcochuelo = document.querySelector("#bizcochuelo").value;
  let listacremas = document.querySelector("#listacremas").value;
  let cremas = document.querySelector("#cremas").value;
  let decoracion = document.querySelector("#decoracion").value;
  let tamaño = document.querySelector("#tamaño").value;
  let fechas = document.querySelector("#fechas").value;
  let horario = document.querySelector("#horario").value;
  let detalle = document.querySelector("#detalle").value;
  let salida = document.querySelector("#salida").innerHTML;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		--DULCES TENTACIONES SIN TACC--%0A
		*PEDIDO*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A%0A
		*Indica el tipo de bizcochuelo*%0A
		${bizcochuelo}%0A%0A
		*Indica el relleno N°1*%0A
		${listacremas}%0A%0A
		*Indica el relleno N°2*%0A
		${cremas}%0A%0A
    *¿Cuál es la decoración?*%0A
		${decoracion}%0A%0A
	  *¿Cuál es el tamaño de la torta?*%0A
		${tamaño}%0A%0A
    *FECHA DE ENTREGA*%0A
		${fechas}%0A%0A
    *HORARIO*%0A
		${horario}%0A%0A
    *Descripcion de la torta*%0A
		${detalle}%0A%0A
    *Precio*%0A
		${salida}%0A%0A`;

  if (cliente === "" || listacremas === "" || detalle === "" || bizcochuelo === "" || cremas === "" || decoracion === "" || tamaño === "" || fechas === "" || horario === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
