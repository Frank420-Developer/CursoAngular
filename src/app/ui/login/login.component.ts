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

}

function sumarDosNumeros(numeroUno: number, numeroDos: number){
  return numeroUno + numeroDos;
}
