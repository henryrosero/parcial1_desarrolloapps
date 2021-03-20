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
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'saludos',
    loadChildren: () => import('./saludos/saludos.module').then( m => m.SaludosPageModule)
  },
  {
    path: 'operaciones',
    loadChildren: () => import('./operaciones/operaciones.module').then( m => m.OperacionesPageModule)
  },
  {
    path: 'parcial-electiva',
    loadChildren: () => import('./parcial-electiva/parcial-electiva.module').then( m => m.ParcialElectivaPageModule)
  },
  {
    path: 'parcial-e1',
    loadChildren: () => import('./parcial-e1/parcial-e1.module').then( m => m.ParcialE1PageModule)
  },
  {
    path: 'parcial',
    loadChildren: () => import('./parcial/parcial.module').then( m => m.ParcialPageModule)
  },
  {
    path: 'parcial1',
    loadChildren: () => import('./parcial1/parcial1.module').then( m => m.Parcial1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
