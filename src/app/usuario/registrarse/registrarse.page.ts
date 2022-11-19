import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicio/usuario.service';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  public formulario: FormGroup;
  constructor(
    private formC: FormBuilder,
    private apiUsuario: UsuarioService,
    private router: Router
  ) {
    this.formulario = this.formC.group({
      firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      age: [0,[Validators.required, Validators.min(18), Validators.max(98)]],
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      birthdate: [Date,[Validators.required, Validators.min(1992), Validators.max(2021)]],
      gender: ['',[Validators.required, Validators.pattern('[F]')]]
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
  public guardarUsuario(): void {
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    this.apiUsuario.agregarUsuario({
      ...this.formulario.value
    })
    .then(resultado => {

        this.formulario.reset();
        this.formulario.updateValueAndValidity();
        alert('Guardada');
        this.router.navigate(['']);
      }
    )
  }









}
