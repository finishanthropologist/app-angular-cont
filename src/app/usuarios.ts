import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class Usuarios {
    private apiUrl = "https://jsonplaceholder.typicode.com/users"

    constructor(private http: HttpClient) {}

    obtenerDatos(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.apiUrl);
    }
}

export interface Usuario {
    id: number;
    name: string;
}
