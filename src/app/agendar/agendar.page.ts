import { Component} from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage{

  constructor(public alertController: AlertController, public navegador: NavController) { }
  async exibirAlerta() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Boa leitura!',
      buttons: ['OK']
    });
    await alert.present();
    this.navegador.navigateForward('devolucao')
  }
  Home(){
    this.navegador.navigateForward('home')
  }
}

