import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevolucaoPage } from './devolucao.page';

const routes: Routes = [
  {
    path: '',
    component: DevolucaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevolucaoPageRoutingModule {}
