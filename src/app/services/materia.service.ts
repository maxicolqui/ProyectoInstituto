import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../models/Materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private urlEndPoint:string = "http://localhost:8080/api"+'/materia';

  constructor(private http:HttpClient) { }

  viewAll(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.urlEndPoint);
  }

  viewById(id: number):Observable<Materia> {
    return this.http.get<Materia>(this.urlEndPoint + '/' + id);
  }

  create(c: Materia):Observable<Materia> {
    return this.http.post<Materia>(this.urlEndPoint, c);
  }

  update(p: Materia):Observable<Materia> {
    return this.http.put<Materia>(this.urlEndPoint + '/' + p.id, p);
  }

  delete(id: number):Observable<Materia> {
    return this.http.delete<Materia>(this.urlEndPoint + '/' + id);
  }
}
