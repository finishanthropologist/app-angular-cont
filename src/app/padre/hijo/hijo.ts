import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})
export class Hijo {
 mensaje = signal('Mensaje desde el hijo');

 cambiarMensaje(nuevoMensaje: string) {
   this.mensaje.set(nuevoMensaje);
 }
}
