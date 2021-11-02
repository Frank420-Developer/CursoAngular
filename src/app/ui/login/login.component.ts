import { Component, OnInit } from '@angular/core';

/* Importaciones de utilidades */
import * as ConstantsApp from '../login/utils/ConstantsApps';

export interface Alumnos{
   nombre: string,
   apellido: string
}
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

  public contentMargin = ConstantsApp.ANCHO_MENU_CERRADO;
  public menuAbierto = false;

  public listaAlumnos:Alumnos[];

  constructor() {
    console.log("Inicialización en el constructor");
    this.saludoBienvenida = '';

    this.listaAlumnos = [
      {  nombre: 'Brandon', apellido: 'Rojas' },
      {  nombre: 'Fernando', apellido: 'Rivera' },
      {  nombre: 'Francisco', apellido: 'Vera' },
      {  nombre: 'Jonathan', apellido: 'Padilla' },
      {  nombre: 'Luis', apellido: 'Carrillo' },
      {  nombre: 'Mariet', apellido: 'Pina' },
      {  nombre: 'Martin', apellido: 'Fabian' },
      {  nombre: 'Oscar', apellido: 'Nuñez' },
      {  nombre: 'Uriel', apellido: 'Lugo' },
      {  nombre: 'Victor', apellido: 'Morales' },
    ];
  }

  /**
   * @description Método implementado por parte de OnInit
   */
  ngOnInit(): void {
    console.log("Inicialización en el OnInit");
    console.log(sumarDosNumeros(12, 12));
  }

  public cerrarMenu():void{
    this.menuAbierto = !this.menuAbierto;
    console.log("¿El menú esta abierto?", this.menuAbierto);

    if( this.menuAbierto ){
      this.contentMargin = ConstantsApp.ANCHO_MENU;
    }else{
      this.contentMargin = ConstantsApp.ANCHO_MENU_CERRADO;
    }
  }

  public cambiarColor(){
    if( this.menuAbierto ){
      return {
        menuActivo: true
      };
    }else{
      return{
        menuDesactivado: true
      };
    }
  }

  /**
   * @description Método encargado de realizar la obtención de los datos del usuario
   * @param usuario (string) Nombre de usuario del cliente. Es usado para validar que la cuenta existe
   * @param contraseña (string) Contraseña de la cuenta. Es usada para validar que la cuenta es valida. 
   */
  private obtenerUsuario(usuario: string, contraseña: string): void{
    //funcionabilidad
    
    var numeroUno = 12; //Esta en proceso de deprecado
    let numeroDos = 20;
    const token = 'sadddadasdasdacewdas';
  }

  public inicioSesion(): boolean{
    //funcionalidad
    return true;
  }

}

function sumarDosNumeros(numeroUno: number, numeroDos: number){
  return numeroUno + numeroDos;
}
