import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
}

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Fone de Ouvido Bluetooth',
      preco: 199.9,
      descricao: 'Fone sem fio com cancelamento de ruído e bateria de 30 horas.',
      imagem: 'https://picsum.photos/seed/fone/400/300',
    },
    {
      id: 2,
      nome: 'Smartwatch Fit',
      preco: 349.0,
      descricao: 'Relógio inteligente com monitor cardíaco, GPS e resistência à água.',
      imagem: 'https://picsum.photos/seed/watch/400/300',
    },
    {
      id: 3,
      nome: 'Mochila Executiva',
      preco: 159.5,
      descricao: 'Mochila impermeável com compartimento para notebook de até 15,6".',
      imagem: 'https://picsum.photos/seed/mochila/400/300',
    },
    {
      id: 4,
      nome: 'Caixa de Som Portátil',
      preco: 129.99,
      descricao: 'Som potente e resistente a respingos, ideal para levar para qualquer lugar.',
      imagem: 'https://picsum.photos/seed/caixa/400/300',
    },
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getProdutoPorId(id: number): Produto | undefined {
    return this.produtos.find((p) => p.id === id);
  }
}