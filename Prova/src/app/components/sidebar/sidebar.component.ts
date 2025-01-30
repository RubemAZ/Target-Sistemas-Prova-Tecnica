import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Para navegação

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule],
})
export class SidebarComponent {
  activeContent: string = ''

  questions = [
    { label: 'Redação', route: '/redaction' },
    { label: 'Questão 1', route: '/question1' },
    { label: 'Questão 2', route: '/question2' },
    { label: 'Questão 3', route: '/question3' },
    { label: 'Questão 4', route: '/question4' },
    { label: 'Questão 5', route: '/question5' },
    { label: 'Dedicatória', route: '/dedication' },
  ];

  constructor(private router: Router) {}

  showContent(content: string): void {
    this.activeContent = content;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
