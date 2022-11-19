import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  producto: any = [];
  productoId = '';
  usuarioId = '';
  constructor(
    private apiProducto: ProductoService
  ) { }

  ngOnInit() {
    this.productoId = this.apiProducto.retornarId();
    this.usuarioId = this.apiProducto.retUsuId();
    this.producto = this.apiProducto.obtenerSingleProducto(parseInt(this.productoId));
  }



  public addCart() {
    fetch('https://dummyjson.com/carts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: parseInt(this.usuarioId),
        products: [
          {
            id: parseInt(this.productoId),
            quantity: 1,
          },
          {
            id: parseInt(this.productoId),
            quantity: 2,
          },
        ]
      })
    })
      .then(res => res.json())
      .then(console.log);
  }




}
