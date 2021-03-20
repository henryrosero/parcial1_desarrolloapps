import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saludos',
  templateUrl: './saludos.page.html',
  styleUrls: ['./saludos.page.scss'],
})
export class SaludosPage implements OnInit {

  constructor(public alertController: AlertController) { }
  nombre = "";

  

  async saludar() {

    if(this.nombre ==""  || this.nombre == null){
      const alert2 = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: '',
        message: 'campo nombre vacio ',
        buttons: ['hecho'],
      });
      await alert2.present();
    }else{
      if(this.nombre==this.nombre){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: '',
          message: 'Hola'+''+this.nombre,
          buttons: ['hecho'],
        });
        await alert.present();
    }
  }
  }


  ngOnInit() {
  }

}
