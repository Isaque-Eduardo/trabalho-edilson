import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu],
  template: `
    <app-menu></app-menu>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
    <footer class="rodape">© 2026 Minha Loja — Todos os direitos reservados</footer>
  `,
})
export class App {}