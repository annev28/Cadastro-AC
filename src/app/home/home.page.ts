import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, public navegador: NavController) {}

  async exibirAlerta() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class' ,
      header: 'Olá!!' ,
      subHeader: 'Bem-vindo',
      message: 'Cadastro Realizado com sucesso',
      buttons: ['OK']
    });

    await alert.present();
  }

}
