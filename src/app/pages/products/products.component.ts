import { Component } from '@angular/core';
import { ProductsService } from '../../api/services/products.service';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../api/model/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [];

  constructor(private productService: ProductsService) {
    this.productService.getAll().subscribe({
      next: data => {
        this.products = data;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
