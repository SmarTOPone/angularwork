import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  template: `
    <div style="max-width: 600px; margin: 0 auto;">
      <app-header></app-header>
      
      <div class="box" style="display: flex; gap: 8px;">
        <button routerLink="/catalog">Каталог</button>
        <button routerLink="/cart">Корзина</button>
      </div>

      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
