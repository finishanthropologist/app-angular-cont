import { Injectable, Service } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class Mensaje {

    private mensaje: string = "Hola desde el servicio de Mensajes"

    constructor() {

    }

    obtenerMensaje(): string{
        return this.mensaje;
    }
}
