export interface Usuario {
  firstName: string;
  lastName: string;
  age: number;
  username: string;
  password: string;
  birthdate: Date;
  gender: string;
  token: string;
}


export interface Usuariovalidador extends Usuario {
  id: number;
}


export interface UsuarioParcial extends Partial<Usuario> {

}
