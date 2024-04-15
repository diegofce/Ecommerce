import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private BASE_URL = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(`${this.BASE_URL}`);
  }

  getAllCategories() {
    return this.http.get<string[]>(`${this.BASE_URL}/categories`);
  }


  getAllByCategory(category: string) {
    return this.http.get<Product[]>(`${this.BASE_URL}/category/${category}`);
  }
    
}
