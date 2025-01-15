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
  activeContent: string = ''; // Controla o conteúdo ativo

  questions = [
    { label: 'Question 1', route: '/question1' },
    { label: 'Question 2', route: '/question2' },
    { label: 'Question 3', route: '/question3' },
    { label: 'Question 4', route: '/question4' },
    { label: 'Question 5', route: '/question5' },
  ];

  constructor(private router: Router) {}

  showContent(content: string): void {
    this.activeContent = content;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
