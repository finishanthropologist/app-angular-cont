import { Component, signal } from '@angular/core';
import {ViewChildComponent } from './view-child/view-child';

@Component({
  imports: [ViewChildComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  titulo = "Decorador @ViewChild() en Angular";
}
