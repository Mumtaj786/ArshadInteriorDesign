import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDesignService {

  constructor(private http: HttpClient) {
   }
   url="http://localhost:3000/bookDesign/customer/customerInfo";

   saveUser(data: any): Observable <any>{
    console.log(data);
    return this.http.post(this.url, data)

   }
}
