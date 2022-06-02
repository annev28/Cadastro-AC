import { Component} from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-minha',
  templateUrl: './minha.page.html',
  styleUrls: ['./minha.page.scss'],
})
export class MinhaPage{

  constructor(public alertController: AlertController, public navegador: NavController) { }
  exibirAlerta(){
    this.navegador.navigateForward('home')
  }

}
