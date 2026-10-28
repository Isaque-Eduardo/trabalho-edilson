import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Produtos } from './pages/produtos/produtos';
import { Detalhe } from './pages/detalhe/detalhe';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'produtos', component: Produtos },
  { path: 'produtos/:id', component: Detalhe },
  { path: 'contato', component: Contato },
  { path: '**', redirectTo: 'home' },
];