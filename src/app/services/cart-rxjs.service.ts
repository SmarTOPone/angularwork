import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartRxjsService {
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  totalPrice$ = this.cartItems$.pipe(
    map(items => items.reduce((acc, item) => acc + item.price, 0))
  );

  totalCount$ = this.cartItems$.pipe(
    map(items => items.length)
  );

  addToCart(product: Product): void {
    const current = this.cartItemsSubject.getValue();
    const itemWithId: Product = {
      ...product,
      cartId: Date.now() + Math.random()
    };
    this.cartItemsSubject.next([...current, itemWithId]);
  }

  removeFromCart(cartId: number): void {
    const current = this.cartItemsSubject.getValue();
    this.cartItemsSubject.next(current.filter(item => item.cartId !== cartId));
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
}
