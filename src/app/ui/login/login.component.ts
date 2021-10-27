import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public titulo = 'Iniciar Sesión';
  public saludoBienvenida: string;
  public numero: number = 24;
  public flag: boolean = true;

  constructor() {
    console.log("Inicialización en el constructor");
    this.saludoBienvenida = '';
  }

  /**
   * @description Método implementado por parte de OnInit
   */
  ngOnInit(): void {
    console.log("Inicialización en el OnInit");
    console.log(sumarDosNumeros(12, 12));
  }

  /**
   * @description Método encargado de realizar la obtención de los datos del usuario
   * @param usuario (string) Nombre de usuario del cliente. Es usado para validar que la cuenta existe
   * @param contraseña (string) Contraseña de la cuenta. Es usada para validar que la cuenta es valida.
   */
  private obtenerUsuario(usuario: string, contraseña: string): void{
    //funcionabilidad
  }


  public inicioSesion(): boolean{

    return true;
  }

}

function sumarDosNumeros(numeroUno: number, numeroDos: number){
  return numeroUno + numeroDos;
}
