import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-question5',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.scss'],
})
export class Question5Component {
  texto: string = '';

  inverterString(): void {
    let textoInvertido = '';
    for (let i = this.texto.length - 1; i >= 0; i--) {
      textoInvertido += this.texto[i];
    }

    Swal.fire({
      title: 'String Invertida',
      text: textoInvertido,
      icon: 'success',
    });
  }
}
