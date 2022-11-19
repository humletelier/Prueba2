import { Injectable } from '@angular/core';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }


  public obtenerProductos() {
    fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
      .then(res => res.json())
      .then(res => console.log(res));
  }





  public obtenerSingleProducto(id: number) {
    fetch('https://dummyjson.com/products/' + id)
      .then(res => res.json())
      .then(console.log);
  }




  public productoId(id) {
    localStorage.setItem('ID', id);
  }


  public retornarId() {
    return localStorage.getItem('ID');
  }


  public usuarioId(id) {
    localStorage.setItem('IDUSU', id);
  }


  public retUsuId() {
    return localStorage.getItem('ID');
  }


  public obtenerCarrito(id: number) {
    fetch('https://dummyjson.com/carts/user/' + id)
      .then(res => res.json())
      .then(console.log);
  }


}
