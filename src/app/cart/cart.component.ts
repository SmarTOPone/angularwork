import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRxjsService } from '../services/cart-rxjs.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-weight: bold;">Корзина</span>
        <button (click)="cartService.clearCart()">Очистить</button>
      </div>

      <ng-container *ngIf="(cartService.cartItems$ | async) as items">
        <div *ngIf="items.length === 0" style="color: #666;">Корзина пуста</div>
        <div *ngFor="let item of items" class="row">
          <span>{{ item.name }} ({{ item.price }} ₸)</span>
          <button (click)="cartService.removeFromCart(item.cartId!)">Удалить</button>
        </div>
      </ng-container>
    </div>
  `
})
export class CartComponent {
  constructor(public cartService: CartRxjsService) {}
}
