import { Injectable } from '@angular/core';
const baseUrl = 'http://85.159.71.66:8080'
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  
  //http bizim rest apilerle haberlesebilmemiz icin gerekli class
  constructor(private http: HttpClient) { }

  //Bu fonk kim cagirirsa ona icinde tutorial tipinde deger alan bir array doner
  getAllTutorials() : Observable<Tutorial[]>{
    //Burada servis ile haberlesiyoruz
    return this.http.get<Tutorial[]>(`${baseUrl}/api/tutorials`)
  }

  newRegister(data : any) : Observable<any> {
    return this.http.post(`${baseUrl}/api/tutorials`,data)
  }

  findByTitle(title:any) : Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(`${baseUrl}/api/tutorials?title=${title}`)
    }

  getTutorialById(id:any) : Observable<Tutorial>{
    return this.http.get(`${baseUrl}/api/tutorials/${id}`)
  }

  // id ye gore ilgili kaydi silmesi icin rest api tarafindaki ilgili methodu cagirir
  deleteTutorial(id:any) : Observable<any>{
    // Gelen id ye gore rest apiden silecek
    return this.http.delete(`${baseUrl}/api/tutorials/${id}`);
  }

  editTutorial(id : any, data : any) : Observable<any>{
    //kendisine gelen datayi yine kendisine parametre olarak gelen id ile birlikte gunceller
    return this.http.put(`${baseUrl}/api/tutorials/${id}`,data);
  }
}
