import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/v1/patients"

  getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
  }

  delete(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseUrl}/${id}`)
  }
}
