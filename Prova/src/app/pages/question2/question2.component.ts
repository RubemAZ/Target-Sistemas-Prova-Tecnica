import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-question2',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss'],
})
export class Question2Component {
  numberToCheck: number = 0; // Valor informado pelo usuário

  // Função para verificar se o número pertence à sequência de Fibonacci
  checkFibonacci() {
    const fibonacci = new Fibonacci();
    const isFibonacci = fibonacci.isFibonacciNumber(this.numberToCheck);

    // Exibe um alerta utilizando SweetAlert2
    if (isFibonacci) {
      Swal.fire({
        icon: 'success',
        title: 'Resultado',
        text: `O número ${this.numberToCheck} pertence à sequência de Fibonacci.`,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Resultado',
        text: `O número ${this.numberToCheck} não pertence à sequência de Fibonacci.`,
      });
    }
  }
}

// Classe para lidar com a lógica de Fibonacci
class Fibonacci {
  private sequence: number[];

  constructor() {
    this.sequence = [0, 1];
  }

  // Gera a sequência de Fibonacci até um número
  private generateSequenceUpTo(num: number): void {
    let nextValue = this.sequence[this.sequence.length - 1] + this.sequence[this.sequence.length - 2];
    while (nextValue <= num) {
      this.sequence.push(nextValue);
      nextValue = this.sequence[this.sequence.length - 1] + this.sequence[this.sequence.length - 2];
    }
  }

  // Verifica se o número pertence à sequência de Fibonacci
  public isFibonacciNumber(num: number): boolean {
    if (num < 0) return false;
    this.generateSequenceUpTo(num);
    return this.sequence.includes(num);
  }
}
