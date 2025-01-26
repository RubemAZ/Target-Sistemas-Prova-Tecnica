import { Component } from '@angular/core';
import Swal from 'sweetalert2';

interface FaturamentoDiario {
  dia: number;
  valor: number;
}

@Component({
  selector: 'app-question3',
  standalone: true,
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.scss'],
})
export class Question3Component {
  dados: FaturamentoDiario[] = [
    { dia: 1, valor: 22174.1664 },
    { dia: 2, valor: 24537.6698 },
    { dia: 3, valor: 26139.6134 },
    { dia: 4, valor: 0.0 },
    { dia: 5, valor: 0.0 },
    { dia: 6, valor: 26742.6612 },
    { dia: 7, valor: 0.0 },
    { dia: 8, valor: 42889.2258 },
    { dia: 9, valor: 46251.174 },
    { dia: 10, valor: 11191.4722 },
    { dia: 11, valor: 0.0 },
    { dia: 12, valor: 0.0 },
    { dia: 13, valor: 3847.4823 },
    { dia: 14, valor: 373.7838 },
    { dia: 15, valor: 2659.7563 },
    { dia: 16, valor: 48924.2448 },
    { dia: 17, valor: 18419.2614 },
    { dia: 18, valor: 0.0 },
    { dia: 19, valor: 0.0 },
    { dia: 20, valor: 35240.1826 },
    { dia: 21, valor: 43829.1667 },
    { dia: 22, valor: 18235.6852 },
    { dia: 23, valor: 4355.0662 },
    { dia: 24, valor: 13327.1025 },
    { dia: 25, valor: 0.0 },
    { dia: 26, valor: 0.0 },
    { dia: 27, valor: 25681.8318 },
    { dia: 28, valor: 1718.1221 },
    { dia: 29, valor: 13220.495 },
    { dia: 30, valor: 8414.61 },
  ];

  // Método para calcular o menor e maior faturamento e exibir no SweetAlert
  calcularMenorMaior(): void {
    const valoresValidos = this.dados.filter((d) => d.valor > 0).map((d) => d.valor);
    const menor = Math.min(...valoresValidos);
    const maior = Math.max(...valoresValidos);

    Swal.fire({
      title: 'Resultados',
      html: `
        <p><strong>Menor Faturamento:</strong> R$ ${menor.toFixed(2)}</p>
        <p><strong>Maior Faturamento:</strong> R$ ${maior.toFixed(2)}</p>
      `,
      icon: 'info',
    });
  }

  // Método para calcular dias com faturamento acima da média e exibir no SweetAlert
  calcularDiasAcimaDaMedia(): void {
    const valoresValidos = this.dados.filter((d) => d.valor > 0).map((d) => d.valor);
    const soma = valoresValidos.reduce((acc, valor) => acc + valor, 0);
    const media = soma / valoresValidos.length;

    const diasAcimaDaMedia = this.dados.filter((d) => d.valor > media).length;

    Swal.fire({
      title: 'Resultados',
      html: `
        <p><strong>Média Mensal:</strong> R$ ${media.toFixed(2)}</p>
        <p><strong>Dias Acima da Média:</strong> ${diasAcimaDaMedia} dias</p>
      `,
      icon: 'info',
    });
  }
}
