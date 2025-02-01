import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import {MatSidenav, MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, MatSidenavContainer, MatSidenav, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'TargetChallenge'
  private readonly defaultFavicon = '/favicon.ico';
  private readonly specificFavicon = '/specific-favicon.ico';

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {
    this.monitorRouteChanges();
  }

  private monitorRouteChanges(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => this.updateFavicon(event.url));
    }
  }

  private updateFavicon(url: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = url.includes('specific-route') ? this.specificFavicon : this.defaultFavicon;
    }
  }
}
