import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  situacao: string;
  constructor() {
    this.situacao = "Aprovado";
  }

  atualizarSituacao(nota: number) {
    if (nota >= 60) {
      this.situacao = "Aprovado";
    } else if (nota >= 20) {
      this.situacao = "Avaliação final";
    } else {
      this.situacao = "Reprovado";
    }
  }
}
