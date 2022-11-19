import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Producto } from '../modelo/producto';
import { ProductoService } from '../servicio/producto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  productos : any = [];
  constructor(
    private apiProducto: ProductoService,
    private alertController: AlertController,
    private navControl: NavController
  ) { }

  ngOnInit() {
    this.apiProducto.productoId(this.productos.id);
    this.productos = this.apiProducto.obtenerProductos();

    console.log(this.productos);
    //this.authUser();

  }






  async salir(){
    const alert= await this.alertController.create({
      header:'Cerar Sesión',
      message:'¿Realmente quieres cerrar sesión?',
      buttons: [
        {
          text:'No',
          handler:() =>{

          }
        },
        {
          text: 'Si',
          handler:()=>{
            this.navControl.navigateRoot('');
          }
        }
      ]

    });
    await alert.present();
  }















  // public authUser() {
  //   fetch('https://dummyjson.com/auth/RESOURCE', {
  //     method: 'GET', /* or POST/PUT/PATCH/DELETE */
  //     headers: {
  //       'Authorization': 'Bearer eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY2ODczMTQ3MiwiZXhwIjoxNjY4NzM1MDcyfQ.5qwV5616sKsS-K7G-wTKIxl6JUtylqG7OlbY0Efd-rU',
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(console.log);
  // }









}


