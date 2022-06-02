import { HomePage } from './../home/home.page';
import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-devolucao',
  templateUrl: './devolucao.page.html',
  styleUrls: ['./devolucao.page.scss'],
})
export class DevolucaoPage{

  constructor(public alertController: AlertController, public navegador: NavController) { }

  exibirAlerta(){
    this.navegador.navigateForward('minha')
  }
  Home(){
    this.navegador.navigateForward('agendar')

  }


}
