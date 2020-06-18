import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) {

   }

  getAllProduct(){
    return this.http.post('http://localhost:3000/api/post/getAllProduct', {})
  }

}
