import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-view-child',
  styleUrl: './view-child.css',
  templateUrl: './view-child.html',
})
export class ViewChildComponent {
  cambiarTexto() {
    this.inputElemento.nativeElement.value = "Texto cambiado";
  }
  @ViewChild('referenciaInput') inputElemento!: ElementRef;
}
