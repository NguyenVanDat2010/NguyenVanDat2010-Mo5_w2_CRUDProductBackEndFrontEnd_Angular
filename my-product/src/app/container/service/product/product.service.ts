import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public http: HttpClient) { }

  getAllProduct = (): Promise<Object> =>{
    return new Promise((resolve, reject) => {
      let url = "http://localhost:8080/products";
      this.http.get(url).subscribe(res =>{
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  createProduct(data: any): Observable<any> {
    return this.http.post<any>(environment.URL + '/products/create', data)
  }


  getCategories = (): Promise<Object> =>{
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
