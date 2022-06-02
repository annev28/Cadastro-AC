import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhaPageRoutingModule } from './minha-routing.module';

import { MinhaPage } from './minha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhaPageRoutingModule
  ],
  declarations: [MinhaPage]
})
export class MinhaPageModule {}
