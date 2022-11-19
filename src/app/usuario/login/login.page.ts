import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../servicio/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario;
  public formulario: FormGroup;
  constructor(
    private formC: FormBuilder,
    private apiUsuario: UsuarioService,
    private router: Router
  ) {
    this.formulario = this.formC.group({

      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      token: [],
    })
  }



  public campo(control: string) {
    return this.formulario.get(control);
  }
  public fueTocado(control: string){
    return this.formulario.get(control).touched;
  }
  public estaSucio(control: string){
    return this.formulario.get(control).dirty;
  }


  ngOnInit() {
  }

  public loguearUsuario(): void {
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }

    this.apiUsuario.loginUsuario({
      ...this.formulario.value
    })
   {
        this.apiUsuario.token(this.formulario.value.token)
        this.formulario.reset();
        this.formulario.updateValueAndValidity();
        alert('Logueado');
        this.router.navigate(['/principal']);
    }

  }












}
