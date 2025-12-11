import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], // necesario para ngModel y router
  template: `
    <div class="login-background">
      <div class="login-box">
        <div class="login-logo">LC</div>
        <h2>Iniciar Sesión</h2>

        <input type="text" [(ngModel)]="usuario" placeholder="Usuario">
        <input type="password" [(ngModel)]="password" placeholder="Contraseña">

        <button (click)="login()">Ingresar</button>

        <div *ngIf="error" class="error">
          Usuario o contraseña incorrectos
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-background {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #555;
    }

    .login-box {
      background-color: #ddd;
      padding: 40px 30px;
      border-radius: 12px;
      width: 350px;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }

    .login-logo {
      background-color: #ffeb3b;
      color: #0d47a1;
      font-size: 48px;
      font-weight: bold;
      width: 100px;
      height: 100px;
      line-height: 100px;
      margin: 0 auto 20px auto;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }

    .login-box h2 {
      margin-bottom: 20px;
      color: #222;
    }

    .login-box input {
      width: 100%;
      padding: 12px 10px;
      margin: 8px 0;
      border-radius: 6px;
      border: 1px solid #aaa;
      font-size: 16px;
    }

    .login-box button {
      width: 100%;
      padding: 12px;
      background-color: #0d47a1;
      color: #fff;
      font-size: 16px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 12px;
      transition: background-color 0.3s;
    }

    .login-box button:hover {
      background-color: #1565c0;
    }

    .error {
      color: red;
      font-weight: bold;
      margin-top: 10px;
    }
  `]
})
export class Login {
  usuario = '';
  password = '';
  error = false;

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.password === '123') {
      this.error = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.error = true;
    }
  }
}
