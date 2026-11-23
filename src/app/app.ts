import { Component, signal } from '@angular/core';
import {ViewChildComponent } from './view-child/view-child';
import { Padre } from './padre/padre';
import { Mensaje } from './mensaje';
import { ListadoUsarios } from './listado-usarios/listado-usarios';

@Component({
  imports: [ListadoUsarios],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  titulo = "Servicios y Observables en Angular";

  mensaje: string;

  constructor(mensajeService: Mensaje) {
    this.mensaje = mensajeService.obtenerMensaje();
  }
}
