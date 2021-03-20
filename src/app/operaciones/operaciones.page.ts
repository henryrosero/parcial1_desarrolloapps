import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {

  constructor() { }
  numero1=null;
  operacion=null;
  numero2=null;
  resultado=null;

  operaciones(){
    if(this.operacion =='/'){
      this.resultado = this.numero1/this.numero2
      console.log(this.resultado)
    }if(this.operacion =='*'){
      this.resultado = this.numero1*this.numero2
      console.log(this.resultado)
    }if(this.operacion =='-'){
      this.resultado = this.numero1-this.numero2
      console.log(this.resultado)
    }if(this.operacion =='+'){
      this.resultado= parseInt(this.numero1)+parseInt(this.numero2)
      console.log(this.resultado)
    }
  }


  ngOnInit() {
  }

}
