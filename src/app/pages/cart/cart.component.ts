import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CartItem } from '../../api/model/cart-item';
import { CartService } from '../../api/services/cart.service';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe, DecimalPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items: CartItem[] = [];
  displayedColumns = ["image", "title", "price", "quentity", "total"];
  constructor(private cartService: CartService){
    this.cartService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
