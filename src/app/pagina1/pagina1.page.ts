import { Component} from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page {

  constructor(public alertController: AlertController, public navegador: NavController) { }

  async exibirAlerta() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Oi!',
      subHeader: 'Bem-vindo!',
      message: 'Cadastro efetuado com sucesso!!!',
      buttons: ['OK']
    });
    await alert.present();
    this.navegador.navigateForward('agendar')
  }
}
