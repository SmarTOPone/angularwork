import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRxjsService } from '../services/cart-rxjs.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box">
      <div style="font-weight: bold; margin-bottom: 8px;">Каталог товаров</div>
      <div *ngFor="let item of products" class="row">
        <span>{{ item.name }} - {{ item.price }} ₸</span>
        <button (click)="cartService.addToCart(item)">В корзину</button>
      </div>
    </div>
  `
})
export class CatalogComponent {
  products: Product[] = [
    { id: 1, name: 'Клавиатура', price: 32000 },
    { id: 2, name: 'Мышь', price: 17000 },
    { id: 3, name: 'Монитор', price: 95000 }
  ];

  constructor(public cartService: CartRxjsService) {}
}
