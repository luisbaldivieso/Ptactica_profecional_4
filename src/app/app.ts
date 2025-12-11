import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf
import { FormsModule } from '@angular/forms';   // Para [(ngModel)]
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Dashboard } from './components/dashboard/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,    
  imports: [Header, Sidebar, Dashboard, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('app-de-banco');

  // Control login / dashboard
  mostrarLogin = true;

  // Datos del login
  usuario = '';
  password = '';
  error = false;

  // Función del login
  login() {
    if (this.usuario === 'admin' && this.password === '123') {
      this.error = false;
      this.mostrarLogin = false; // Oculta login y muestra dashboard
    } else {
      this.error = true;
    }
  }
}
