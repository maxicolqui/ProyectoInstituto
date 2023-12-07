import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/Reserva';
import { URL_ENDPOINT } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private urlEndPoint:string = URL_ENDPOINT + '/reserva';

  constructor(private http:HttpClient) { }

  viewAll(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.urlEndPoint);
  }

  viewById(id: number):Observable<Reserva> {
    return this.http.get<Reserva>(this.urlEndPoint + '/' + id);
  }

  create(c: Reserva):Observable<Reserva> {
    return this.http.post<Reserva>(this.urlEndPoint, c);
  }

  update(p: Reserva):Observable<Reserva> {
    return this.http.put<Reserva>(this.urlEndPoint + '/' + p.id, p);
  }

  delete(id: number):Observable<Reserva> {
    return this.http.delete<Reserva>(this.urlEndPoint + '/' + id);
  }

  filterDateTurn(f: string, t: string): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.urlEndPoint + '-ft/' + f + '/' + t);
  }
}
