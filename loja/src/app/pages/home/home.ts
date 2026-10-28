import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <h1>Bem-vindo à Minha Loja!</h1>
      <p>Os melhores produtos com os melhores preços, entregues na sua casa.</p>
      <a routerLink="/produtos" class="btn">Ver produtos</a>
    </section>
  `,
})
export class Home {}