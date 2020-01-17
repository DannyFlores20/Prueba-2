class Motobomba{
    constructor(id,capacidad,estado=false){
        this.id = id;
        this.capacidad = capacidad;
        this.estado = estado;
    }
    prender(){
        return this.estado = true;
    }
    apagar(){
        return this.estado = false;
    }
    getEstado(){
        return this.estado;
    }
    toString(){
        if(this.estado == true){
            return "la motobomba con id " + this.id + " esta encendida"
        }else{
            return "la motobomba con id " + this.id + " esta apagada"
        }
    }
    funcionProbar(){
        let prueba = document.getElementById("id").value;
        let cap = document.getElementById("capacidad").value;
        this.id = prueba;
        this.capacidad = cap;
        console.log(this.id)
        console.log(this.capacidad)
        document.getElementById("demo").innerHTML = 'El Id es de:  '+prueba+' '+' La Capacidad es de:  '+cap;
        document.getElementById("img").innerHTML = ('<img src="img/moto.jpg"/>');
        
        let boton = document.createElement("button");
        boton.innerHTML = "boton";
        document.body.appendChild(boton);

        boton.onclick = function() {
            if(this.estado == true){
                return boton.innerHTML='encendido';
            }else{
                return boton.innerHTML='apagado';
            }
        }
        
    }
    ocultar(){
        if(this.estado == true){
            document.getElementById('cuadro').style.display = 'none';
        }else{
            document.getElementById('cuadro').style.display = 'block';
        }
    }

}

let prueba = new Motobomba(14,18,false);
console.log(prueba.toString());
