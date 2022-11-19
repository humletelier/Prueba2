import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public URL_USUARIO_AGREGAR = 'https://dummyjson.com/users/add';
  public URL_USUARIO = 'https://dummyjson.com/users';


  public Authorization = "Bearer" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY2ODYzMTg2OCwiZXhwIjoxNjY4NjM1NDY4fQ.tQs8EvL4KDeY_8j-9mYvwDvxiGBzzgJ0z0StZ0tMm-c";
  constructor(private usuario: HttpClient) {

  }

  public agregarUsuario(usuario: Usuario) {
    return fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: usuario.firstName,
        lastName: usuario.lastName,
        age: usuario.age,
        username: usuario.username,
        password: usuario.password,
        birthdate: usuario.birthdate,
        gender: usuario.gender
      })
    })
      .then(res => res.json())
      .then(console.log);

  }

  public loginUsuario(usuario: Usuario) {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: usuario.username,
        password: usuario.password,
        expiresInMins: 60, // optional
      })
    })
      .then(res => res.json())
      .then(console.log);

  }



  public todosUsuarios() {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(console.log);

  }


  public token(token) {
    localStorage.setItem('token', token);
  }

  public retornarToken(){
    return localStorage.getItem('token');
  }

}
