
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
document.tortas.cremas.options[5]=new Option("CHANTILLY MIX FRUTAL","CHANTILLY MIX FRUTAL");
document.tortas.cremas.options[6]=new Option("CREMA MOCCA","CREMA MOCCA");
document.tortas.cremas.options[7]=new Option("GANACHE DE CHOCOLATE NEGRO","GANACHE DE CHOCOLATE NEGRO");

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
  document.getElementById("salida").innerHTML = "$2050";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
   document.getElementById("salida").innerHTML = "$1850";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$1650";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$1950";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$1950";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$1700";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2000";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$1900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$1980";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2250";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2050";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2350";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2350";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$1950";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2250";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2000";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2300";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2470";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2630";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2600";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$1900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2360";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$1960";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2300";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2600";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2620";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2530";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2430";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2250";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2050";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2350";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2250";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2000";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2350";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2350";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2450";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas === "DULCE DE LECHE REPOSTERO" && cremas === "CREMA PASTELERA" && decoracion === "CREMA DE LECHE" && tamaño === "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2300";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$1900";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2350";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$1950";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2260";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2530";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2350";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2150";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2620";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2230";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2530";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2300";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2560";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2630";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2250";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2550";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2720";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2550";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2320";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2630";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2900";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2830";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2650";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2430";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2550";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2370";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2150";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2460";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2430";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2530";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2830";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2650";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2870";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2680";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2300";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2600";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2270";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2580";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "10 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2700";
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$1850";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2000";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2350";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2750";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2600";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3000";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2650";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2300";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2680";
}

// BIZCOCHUELO DE VAINILLA + GANACHE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2750";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2850";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3250";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2850";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3200";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2850";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2250";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2600";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2750";
}

// BIZCOCHUELO DE VAINILLA + GANACHE DE CHOCOLATE BLANCO CON MARROC + 10 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3050";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2750";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3100";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2750";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2530";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2230";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2600";
}

// BIZCOCHUELO DE VAINILLA + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2850";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2150";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2900";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2550";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2250";
}
else if (bizcochuelo == "BIZCOCHUELO DE VAINILLA" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2600";
}


//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + DULCE DE LECHE REPOSTERO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2950";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2550";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2250";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2980";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2300";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3150";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2760";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CHANTILLY MIX FRUTAL" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3050";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2650";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2350";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$3250";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2870";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2600";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "DULCE DE LECHE REPOSTERO" && cremas == "GANACHE DE CHOCOLATE NEGRO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
 document.getElementById("salida").innerHTML = "$2900";
}

//RELLENOS CON BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3350";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2980";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "COMBINADO DE REPOSTERO CON CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3050";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3050";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2750";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3150";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3450";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3150";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3200";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA PASTELERA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2850";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3350";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2950";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2650";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE DE CHOCOLATE NEGRO" && cremas == "CREMA CHOCOLATE BLANCO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3050";
}

// BIZCOCHUELO DE CHOCOLATE + GANACHE DE CHOCOLATE BLANCO CON MARROC + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3300";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2950";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2650";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3000";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3350";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2980";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "CREMA MOCCA" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3050";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3150";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "GANACHE BLANCO CON MARROC" && cremas == "DULCE DE LECHE REPOSTERO" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2900";
}

// BIZCOCHUELO DE CHOCOLATE + COMBINADO DE REPOSTERO CON GANACHE NEGRO + 16 PORCIONES

else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3100";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2700";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2400";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "CREMA DE LECHE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$3200";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "GANACHE DE CHOCOLATE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2800";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "MERENGUE" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2500";
}
else if (bizcochuelo == "BIZCOCHUELO DE CHOCOLATE" && listacremas == "COMBINADO DE REPOSTERO CON GANACHE NEGRO" && cremas == "CHANTILLY CON FRUTOS ROJOS" && decoracion == "BUTTERCREAM" && tamaño == "16 PORCIONES"){
  document.getElementById("salida").innerHTML = "$2850";
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
    *Descripcion de la torta*%0A
		${detalle}%0A%0A
    *Precio*%0A
		${salida}%0A%0A`;

  if (cliente === "" || listacremas === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
