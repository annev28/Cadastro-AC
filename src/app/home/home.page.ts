import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, public navegador: NavController) {}
  paginaAgenda(){
    this.navegador.navigateForward('agendar')
  }

  paginaCadastro(){
    this.navegador.navigateForward('pagina1')
  }
}
