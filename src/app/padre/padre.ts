import { Component } from '@angular/core';
import { Hijo } from './hijo/hijo';

@Component({
  imports: [Hijo],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {
  mensaje: string = '';

  recibirNotificacion(mensaje: string) {
    this.mensaje = mensaje;
  }
  mensajePadre: string = "Mensaje desde el componente padre";
}
