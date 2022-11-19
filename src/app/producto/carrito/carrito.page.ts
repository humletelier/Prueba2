import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {


  carrito: any = [];
  usuarioId = '';
  constructor(
    private apiProducto : ProductoService
  ) { }

  ngOnInit() {
    this.usuarioId = this.apiProducto.retUsuId();
    this.carrito = this.apiProducto.obtenerCarrito(parseInt(this.usuarioId));
  }

}
