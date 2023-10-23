import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../models/Profesor';
import { URL_ENDPOINT } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private urlEndPoint:string = URL_ENDPOINT + '/profesor';

  constructor(private http:HttpClient) { }

  viewAll(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.urlEndPoint);
  }

  viewById(id: number):Observable<Profesor> {
    return this.http.get<Profesor>(this.urlEndPoint + '/' + id);
  }

  create(c: Profesor):Observable<Profesor> {
    return this.http.post<Profesor>(this.urlEndPoint, c);
  }

  update(p: Profesor):Observable<Profesor> {
    return this.http.put<Profesor>(this.urlEndPoint + '/' + p.id, p);
  }

  delete(id: number):Observable<Profesor> {
    return this.http.delete<Profesor>(this.urlEndPoint + '/' + id);
  }
}
