import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Produto, ProdutoService } from '../../services/produto';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
    @if (produto) {
      <div class="detalhe">
        <img [src]="produto.imagem" [alt]="produto.nome" />
        <div>
          <h1>{{ produto.nome }}</h1>
          <p class="preco">{{ produto.preco | currency: 'BRL' }}</p>
          <p>{{ produto.descricao }}</p>
          <a routerLink="/produtos" class="btn">← Voltar</a>
        </div>
      </div>
    } @else {
      <h2>Produto não encontrado 😕</h2>
      <a routerLink="/produtos" class="btn">← Voltar</a>
    }
  `,
})
export class Detalhe {
  produto?: Produto;

  constructor(private route: ActivatedRoute, private service: ProdutoService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.service.getProdutoPorId(id);
  }
}