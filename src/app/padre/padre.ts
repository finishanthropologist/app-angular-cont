import { Component, ViewChild } from '@angular/core';
import { Hijo } from './hijo/hijo';

@Component({
  imports: [Hijo],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {

  @ViewChild(Hijo) componenteHijo!: Hijo;

  cambiarMensajeHijo() {
    this.componenteHijo.cambiarMensaje("Mensaje actualizado desde el componente padre")
  }
  mensaje: string = '';

}
