import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevolucaoPageRoutingModule } from './devolucao-routing.module';

import { DevolucaoPage } from './devolucao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevolucaoPageRoutingModule
  ],
  declarations: [DevolucaoPage]
})
export class DevolucaoPageModule {}
