import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})
export class Hijo {
  enviarMensaje() {
    this.notificarPadre.emit('Mensaje desde el componente hijo');
  }
  @Output() notificarPadre = new EventEmitter<string>();
}
