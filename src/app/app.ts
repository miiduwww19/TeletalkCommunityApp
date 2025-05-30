import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './core/layout/layout';
import { HeaderComponent } from './core/header/header';
import { SidebarComponent } from './core/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'crm-app';
}
