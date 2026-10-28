import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  template: `
    <h1>Contato</h1>
    <p>Fale com a gente:</p>
    <ul class="contato">
      <li>📧 contato@minhaloja.com</li>
      <li>📞 (47) 99999-9999</li>
      <li>📍 Rua das Flores, 123 — Santa Catarina</li>
      <li>🕒 Seg a Sex, das 9h às 18h</li>
    </ul>
  `,
})
export class Contato {}