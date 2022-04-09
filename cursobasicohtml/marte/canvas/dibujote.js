var d = document.getElementById("Dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);
var lineas = 30;
var l;
var yi, xf;

for(l = 0; l<lineas; l++){
yi = l * 10;
xf = 10 * (l + 1);
dibujar_linea("grey", 0 , yi, xf, 300);
dibujar_linea("grey", yi , 0, 300, xf);
}
for(l=0; l<lineas; l++){
yi = l * 10;
xf = 300 - (10 * l+1);
xi = 300 - (10 * l);
yf = 10 * (l + 1);
dibujar_linea("grey", 300, yi, xf, 300);
dibujar_linea("grey", xi, 0, 0, yf);
}
for(l=0; l<lineas; l++){
yi = l * 10;
yf = 300 - (l * 10);
dibujar_linea("grey", 0, yi, 300, yf);
}

dibujar_linea("#AFA", 1, 1, 300, 1);
dibujar_linea("#AFA", 299, 0, 299, 300);
dibujar_linea("#AFA", 1, 0, 1, 300);
dibujar_linea("#AFA", 0, 299, 300, 299);

function dibujar_linea(color, xinicial, yinicial, xfinal, yfinal){
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();
lienzo.closePath();
}