import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../api/model/product';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { MatChipsModule } from "@angular/material/chips";


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    SlicePipe, 
    CurrencyPipe, 
    MatChipsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

}