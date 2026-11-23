import { Component, OnInit, signal } from '@angular/core';
import { Usuario, Usuarios } from '../usuarios';

@Component({
  imports: [],
  selector: 'app-listado-usarios',
  styleUrl: './listado-usarios.css',
  templateUrl: './listado-usarios.html',
})
export class ListadoUsarios implements OnInit {
  usuarios = signal<Usuario[]>([]);

  constructor(private usuariosService: Usuarios) {
    
  }

  ngOnInit(){
    this.usuariosService.obtenerDatos().subscribe({
      next: (datos) => {
        this.usuarios.set(datos);
      },
      error: (error) => {
        console.error('No se pudieron cargar los usuarios:', error);
      }
    });
  }
}
