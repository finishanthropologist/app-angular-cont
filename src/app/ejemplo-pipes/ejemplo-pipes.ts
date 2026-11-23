import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-ejemplo-pipes',
  styleUrl: './ejemplo-pipes.css',
  templateUrl: './ejemplo-pipes.html',
})
export class EjemploPipes {
  empleados = [
    {nombre: 'Ricardo Suarez', sueldo:12000, fechaNacimiento: new Date('2000-08-01')},
    {nombre: 'Dylan Perez', sueldo:8000, fechaNacimiento: new Date('2005-05-28')},
    {nombre: 'Laura Mejia', sueldo: 15000, fechaNacimiento: new Date('1998-12-30')}
  ]
}
