import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Produto, ProdutoService } from '../../services/produto';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
    <h1>Nossos Produtos</h1>
    <div class="grid">
      @for (p of produtos; track p.id) {
        <a class="card" [routerLink]="['/produtos', p.id]">
          <img [src]="p.imagem" [alt]="p.nome" />
          <h3>{{ p.nome }}</h3>
          <p class="preco">{{ p.preco | currency: 'BRL' }}</p>
          <span class="btn">Ver detalhes</span>
        </a>
      }
    </div>
  `,
})
export class Produtos {
  produtos: Produto[];

  constructor(private service: ProdutoService) {
    this.produtos = this.service.getProdutos();
  }
}