import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'registrarse',
    loadChildren: () => import('./usuario/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./producto/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'detalleProducto',
    loadChildren: () => import('./producto/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./producto/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./usuario/login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
