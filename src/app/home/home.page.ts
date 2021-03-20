import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = null;
  apellido = null;
  celular = null;
  email = null;
  usuarios =[];


  constructor() {}

  guardarDatos(){
    //agregar datos a la base de datos
    this.usuarios.push({
      nombre: this.nombre,
      apellido: this.apellido,
      celular: this.celular,
      email: this.email
    })
    //limpiar datos
    this.nombre = "";
    this.apellido = "";
    this.celular = "";
    this.email = "";
  }

  editar(usuarios){
     this.nombre= usuarios.nombre,
     this.apellido= usuarios.apellido,
     this.celular= usuarios.celular,
     this.email= usuarios.email;

    this.eliminar(usuarios);
  }

  eliminar(datos){
    var y = this.usuarios.indexOf(datos)
    this.usuarios.splice(y,1);
  }

}
