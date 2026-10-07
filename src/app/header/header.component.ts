import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRxjsService } from '../services/cart-rxjs.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box header-bar" style="display: flex; justify-content: space-between; align-items: center;">
      <strong>Магазин техники</strong>
      <div>
        Товары: <strong>{{ (cartService.totalCount$ | async) }} шт.</strong> | 
        Сумма: <strong>{{ (cartService.totalPrice$ | async) }} ₸</strong>
      </div>
    </div>
  `
})
export class HeaderComponent {
  constructor(public cartService: CartRxjsService) {}
}
