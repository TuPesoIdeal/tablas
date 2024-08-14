function tablasdemultiplicar(){
   let numTabla = document.getElementById("txtnumerodetabla").value;
   document.write('<h1>Tablas de multiplicar</h1>');
   document.write('<br>');
    document.write('<h2> tabla de multiplicar del </h2>'+numTabla);
    document.write('<br>')

    let contador = 1
    while (contador<=10){
        let resultado= parseInt(numTabla)*(contador);
        document.write(numTabla,"*",contador,"=",resultado);
        document.write("<br>")
        contador=contador+1;
    }
}