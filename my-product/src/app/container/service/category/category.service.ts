import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }

  getCategory(id: number): Observable<any>{
    return this.http.get(environment.URL+"/categoties/"+id);
  }

  getAllCategories = (): Promise<Object> =>{
    return new Promise((resolve, reject) => {
      let url = "http://localhost:8080/categories";
      this.http.get(url).subscribe(res =>{
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
}

