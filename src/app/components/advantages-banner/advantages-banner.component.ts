import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advantages-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-half custom-skew overflow-hidden bg-black h-16 -skew-y-6">
      <div class="relative w-full h-full top-0 bg-black">
        <div class="flex whitespace-nowrap h-full items-center animate-scroll">
          <div 
            *ngFor="let advantage of displayAdvantages; let i = index"
            class="inline-block px-4 md:px-6 py-2 mx-2 md:mx-4 text-white font-bold text-sm md:text-xl">
            {{ advantage }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .animate-scroll {
      animation: scroll 20s linear infinite;
    }

    .custom-skew {
      transform: skewY(-25deg); /* Adjust the angle as needed */
      margin-top: -20px; /* Adjust to position it correctly */
    }

  `]
})
export class AdvantagesBannerComponent {
  advantages = [
    "Decentralized Blockchain",
    "Secure",
    "Transparent",
    "Fast Transactions",
    "Low Fees",
    "Global Access",
    "24/7 Trading",
    "Inflation Resistant"
  ];

  // Double the array for continuous scrolling
  displayAdvantages = [...this.advantages, ...this.advantages];
}