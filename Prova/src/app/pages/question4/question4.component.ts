import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {NgForOf} from '@angular/common';

interface FaturamentoEstado {
  estado: string;
  valor: number;
}

@Component({
  selector: 'app-question4',
  standalone: true,
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.scss'],
  imports: [
    NgForOf
  ]
})
export class Question4Component {
  dados: FaturamentoEstado[] = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 },
  ];

  // Método para calcular o faturamento total
  private calcularFaturamentoTotal(): number {
    return this.dados.reduce((total, item) => total + item.valor, 0);
  }

  // Método para calcular o percentual de um estado no total
  private calcularPercentual(valor: number): number {
    const total = this.calcularFaturamentoTotal();
    return parseFloat(((valor / total) * 100).toFixed(2));
  }

  // Método para exibir os detalhes de um estado
  mostrarDetalhes(estado: FaturamentoEstado): void {
    const percentual = this.calcularPercentual(estado.valor);
    Swal.fire({
      title: `Detalhes - ${estado.estado}`,
      html: `
        <p><strong>Faturamento Mensal:</strong> R$ ${estado.valor.toFixed(2)}</p>
        <p><strong>Percentual no Total:</strong> ${percentual}%</p>
      `,
      icon: 'info',
    });
  }
}
