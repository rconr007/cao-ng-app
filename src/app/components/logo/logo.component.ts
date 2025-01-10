import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="logo-container">
      <span class="logo-text">CAONABO</span>
    </div>
  `,
  styles: [`
    .logo-container {
      width: 150px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .logo-text {
      font-size: 24px;
      font-weight: bold;
      background: linear-gradient(45deg, #002D62 45%, #FFFFFF 50%, #CE1126 55%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `]
})
export class LogoComponent {}