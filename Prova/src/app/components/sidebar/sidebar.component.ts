import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeContent: string | null = null;
  questions = [
    { label: 'Questão 1', route: '/question1' },
    { label: 'Questão 2', route: '/question2' },
    { label: 'Questão 3', route: '/question3' },
    { label: 'Questão 4', route: '/question4' },
    { label: 'Questão 5', route: '/question5' },
  ];

  constructor(private router: Router) {}

  showContent(content: string) {
    this.activeContent = content;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
