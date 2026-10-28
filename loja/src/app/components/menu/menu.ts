import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="menu">
      <span class="logo">🛍️ Minha Loja</span>
      <div class="links">
        <a routerLink="/home" routerLinkActive="ativo">Home</a>
        <a routerLink="/produtos" routerLinkActive="ativo">Produtos</a>
        <a routerLink="/contato" routerLinkActive="ativo">Contato</a>
      </div>
    </nav>
  `,
})
export class Menu {}
