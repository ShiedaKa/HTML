var texto = document.getElementById("testo_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, xi, yf;

while (l < lineas) 
{
   yi= 10 * l;
   xf= 10 * (l + 1);
  dibujarLinea("#e11a29", 0, yi, xf, 300);
  console.log("linea" +l);
  l = l +0.5;
  
  yf= 10 * l;
  xi= 10 * (l + 1);
  dibujarLinea("#6fc6d7", xi, 0, 300, yf);
  console.log("linea" +l);
  l = l +0.5;
  
}

dibujarLinea("#AAF", 1,1,1,299);
dibujarLinea("#AFA", 1,299,299,299);
dibujarLinea("#AFA", 299,299,299,1);
dibujarLinea("#AFA", 299,1,1,1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial, yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();
    }

function dibujoPorClick()
{
    var xxx = parseInt(texto.vaule);
    alert("No me toques ahí")
}