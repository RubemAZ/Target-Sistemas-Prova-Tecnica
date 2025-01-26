import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  /**template: `
    <div class="card">
      <div class="card-header">
        <h3>Questão 1</h3>
      </div>
      <div class="card-body">
        <p>Considere o seguinte código:</p>
        <pre><code>
let soma = 0;
for (let i = 1; i &lt;= 5; i++) {
  soma += i;
}
        </code></pre>
        <p>Ao final do processamento, qual será o valor da variável <strong>SOMA</strong>?</p>
        <button (click)="executeLogic()" class="btn btn-primary">Executar/Run</button>
      </div>
    </div>
  `,*/
  styleUrls: ['./question1.component.scss'],
})
export class Question1Component {
  executeLogic(): void {
    let soma = 0;
    for (let i = 0; i <= 13; i++) {
      soma += i;
    }

    Swal.fire({
      title: 'Resultado',
      text: `O valor da variável SOMA é: ${soma}`,
      icon: 'info',
      confirmButtonText: 'Ok'
    });
  }
}
