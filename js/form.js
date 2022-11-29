
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

 //RELLENOS CON BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 8 PORCIONES

 function precio(){
   
  let bizcochuelo = document.querySelector("#bizcochuelo").value;
  let listacremas = document.querySelector("#listacremas").value;
  let cremas = document.querySelector("#cremas").value; 
  let decoracion = document.querySelector("#decoracion").value;
  let tamaño = document.querySelector("#tamaño").value;
  
  
if(bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2970";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2020";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2830";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3010";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3590";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2070";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2880";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3370";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3950";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2420";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3350";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3930";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2410";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3220";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3410";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3990";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3280";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3370";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3950";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2420";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3230";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 8 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3570";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2630";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3440";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3620";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2670";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3480";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3610";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4180";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2660";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3660";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2720";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3530";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3220";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3800";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2280";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3090";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3260";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3840";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2320";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3130";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 8 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3540";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4110";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2590";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3580";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4160";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2640";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3290";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3860";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2340";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3150";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 8 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3540";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4110";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2590";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3520";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2580";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3390";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 8 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas === "DULCE DE LECHE REPOSTERO" && cremas === "CREMA PASTELERA" && decoracion === "CREMA DE LECHE" && tamaño === "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3170";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3740";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2220";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3030";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3210";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3790";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2270";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3080";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3560";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4140";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2620";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3430";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3550";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4130";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2610";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3420";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3610";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4190";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2670";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3480";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3560";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4140";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2620";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3430";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 8 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3770";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4340";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2820";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3630";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3810";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4390";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2870";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3680";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4380";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2860";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3670";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3860";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4440";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2920";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3730";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3420";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4000";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2470";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3280";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3460";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4040";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2520";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3330";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 8 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3730";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4310";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2790";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3780";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4360";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2840";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3650";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3480";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4060";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2540";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3350";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 8 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3730";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4310";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2790";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3720";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4300";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2780";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3590";
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5140";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5630";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5180";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5670";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3190";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4190";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5740";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3760";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4750";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5910";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6410";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3930";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4920";
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
  document.getElementById("salida").innerHTML = "$5890";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6380";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5930";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6420";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3940";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4940";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6040";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6540";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4060";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5050";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6260";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6750";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4270";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5270";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6920";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4440";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5440";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4420";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5410";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5650";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3670";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4660";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5700";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6190";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3710";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4700";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6720";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6370";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6870";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4390";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5380";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6390";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3910";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4910";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6050";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6540";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4060";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5050";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6220";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6710";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5220";
}


//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5950";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3470";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4460";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5990";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3510";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6060";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6550";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4070";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5070";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6230";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6720";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4240";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5240";
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
 document.getElementById("salida").innerHTML = "$6200";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4220";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5210";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6250";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6740";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4260";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5250";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6360";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6850";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6570";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7070";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4590";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5580";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6740";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7240";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4760";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6720";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7210";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4730";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5730";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5970";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6460";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3980";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4980";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6010";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4020";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5020";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6540";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7040";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4560";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5550";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6690";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7180";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6220";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6710";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4230";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5220";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6360";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6850";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6530";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7020";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4540";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5540";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6340";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6890";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3840";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5110";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7340";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7880";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3960";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7050";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7600";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5820";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7170";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7720";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4670";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5940";
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
  document.getElementById("salida").innerHTML = "$7200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7740";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4700";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5960";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7290";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7840";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4790";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6060";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7620";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8170";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5120";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6390";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7720";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8270";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5220";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6480";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7840";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8380";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5340";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6600";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7860";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8410";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5360";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6630";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7010";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4510";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5770";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7130";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7670";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4630";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5890";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7890";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8440";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5390";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6660";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8040";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8580";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5540";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6800";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8010";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4970";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6230";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7980";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4930";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6190";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8090";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5050";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6310";
}


//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6890";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7440";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4390";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5660";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7010";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7560";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$4510";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5780";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7610";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8150";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7720";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8270";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5220";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6490";
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
 document.getElementById("salida").innerHTML = "$7750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8290";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5250";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6510";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7850";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8390";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5350";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6610";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8170";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8720";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5670";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6940";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8270";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8820";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5770";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7040";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8390";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8930";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5890";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7150";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8410";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8960";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5910";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7180";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7560";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5060";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6320";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7680";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8220";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5180";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6440";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7920";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8460";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5420";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6680";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8060";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5560";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6820";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7490";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8040";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4990";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6250";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 20 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7980";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8530";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5480";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8640";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6860";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7830";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8270";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4660";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6250";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7980";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8420";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$4810";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8660";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9110";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7090";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8890";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9330";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5720";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7320";
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
  document.getElementById("salida").innerHTML = "$8850";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5690";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7280";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8940";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9380";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5770";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7360";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9250";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9700";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6080";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7680";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9480";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9920";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6310";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7910";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9710";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6540";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8130";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9670";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10110";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8640";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9090";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7070";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8790";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5620";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7220";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9530";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9970";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6360";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7950";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9720";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10160";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8140";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8990";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5820";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7410";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9120";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9560";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5950";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7540";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9340";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9790";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6170";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7770";
}


//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8420";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8870";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5250";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6850";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8570";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9020";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$5400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7000";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9260";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9710";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6090";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7690";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9490";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9930";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6320";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7910";
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
 document.getElementById("salida").innerHTML = "$9450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9900";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6280";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7880";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9530";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9980";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7960";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9850";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10290";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6680";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8280";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10080";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10520";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6910";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10300";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7140";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8730";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10270";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10710";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8690";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9240";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9680";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6070";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7660";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9390";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9830";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6220";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7810";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9840";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6230";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7820";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9590";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10030";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6420";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8010";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8850";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9300";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5690";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7280";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 24 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9710";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10160";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6550";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8140";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9940";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10380";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6770";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "24 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8370";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10090";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5640";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7280";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10270";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10480";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$5820";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7460";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11140";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11350";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6690";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8330";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11270";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11480";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6820";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8460";
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
  document.getElementById("salida").innerHTML = "$11420";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11640";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6980";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8610";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11440";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6780";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8420";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11760";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8730";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11980";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12190";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7530";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9160";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12110";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12320";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7660";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9290";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12260";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7810";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10930";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11140";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6480";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8110";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11110";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11320";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$6660";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8290";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12190";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7740";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9380";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12690";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8030";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9660";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11440";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11660";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7000";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8630";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11690";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7240";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8880";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11820";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12030";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7370";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9010";
}


//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$10880";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$11090";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6430";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8070";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$11060";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$11270";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$6610";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$8250";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$11930";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$12140";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7480";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9110";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$12060";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$12270";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7610";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9240";
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
 document.getElementById("salida").innerHTML = "$12210";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$12420";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7770";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$12020";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$12230";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$7570";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
 document.getElementById("salida").innerHTML = "$9210";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12330";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12550";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7890";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9520";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12760";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12980";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8320";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9950";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12890";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$13110";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10080";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$13050";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$13260";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10240";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11720";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$11930";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7270";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8900";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10900";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12110";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9080";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12980";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$13190";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8530";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10160";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$13260";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$13470";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8810";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$10450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12230";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12440";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$7780";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9420";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 30 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12480";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12690";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8030";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9660";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12610";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$12820";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$8160";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "30 PORCIONES"){
  document.getElementById("salida").innerHTML = "$9790";
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
