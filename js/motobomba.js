class Motobomba {
    constructor(id, capacidad, estado = false) {
        this.id = id;
        this.capacidad = capacidad;
        this.estado = estado;
    }
    prender() {
        this.estado = true;
    }
    apagar() {
        this.estado = false;
    }
    getEstado() {
        return this.estado;
    }
    toString() {
        if (this.estado == true) {
            document.getElementById('estado').innerHTML='<img src="img/verde.jpg" windth="130px" height="100px">'
            var parrafo=document.createElement('li')
            parrafo.innerHTML = 'Esta Prendido'
            document.body.appendChild(parrafo)
            o.apagar()
            document.getElementById("boton").innerHTML="esta prendido"
            
        }
        else if(this.estado == false) {
            document.getElementById('estado').innerHTML='<img src="img/rojo.jpg" windth="130px" height="100px">'
            var parrafo=document.createElement('li')
            parrafo.innerHTML = 'Esta Apagado'
            document.body.appendChild(parrafo)
            o.prender()
            document.getElementById("boton").innerHTML="Se encuentra apagado"
        }
    }
    funcionValidar(){
        var recu= document.getElementById('id').value;
        var recu1=document.getElementById('capacidad').value;
        this.id=recu
        this.capacidad=recu1
        console.log(this.id)
        console.log(this.capacidad)
        document.getElementById('img').innerHTML='<img src="img/carrobomba.jpg" windth="130px" height="100px">'
        document.getElementById('pintar').innerHTML='<button type="button" id="boton" onclick="o.toString()">ESTADO</button>'
    }
}



let o = new Motobomba()