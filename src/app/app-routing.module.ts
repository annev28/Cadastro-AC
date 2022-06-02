import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'agendar',
    loadChildren: () => import('./agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'devolucao',
    loadChildren: () => import('./devolucao/devolucao.module').then( m => m.DevolucaoPageModule)
  },
  {
    path: 'minha',
    loadChildren: () => import('./minha/minha.module').then( m => m.MinhaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
