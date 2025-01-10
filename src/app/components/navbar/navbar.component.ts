import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  template: `
    <nav class="navbar">
      <div class="brand w-[150px] h-[48px] flex items-center">
        <app-logo></app-logo>
      </div>
      <div class="nav-links">
        <button (click)="openModal('ico')" class="nav-item">ICO</button>
        <button (click)="openModal('token')" class="nav-item">TOKEN</button>
        <button (click)="openModal('roadmap')" class="nav-item">ROADMAP</button>
      </div>
      <button (click)="openModal('wallet')" class="connect-wallet">
        Connect to Wallet
      </button>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      z-index: 100;
    }

    .brand {
      display: flex;
      align-items: center;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-item {
      background: none;
      border: none;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #0066ff;
      }
    }

    .connect-wallet {
      background: linear-gradient(45deg, #0000FF, #FF0000);
      border: none;
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 25px;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }

      .nav-links {
        gap: 1rem;
      }
    }
  `]
})
export class NavbarComponent {
  constructor(private modalService: ModalService) {}

  openModal(section: string) {
    const content = this.getModalContent(section);
    this.modalService.updateContent({
      isOpen: true,
      ...content
    });
  }

  private getModalContent(section: string) {
    const contents = {
      ico: {
        title: 'Initial Coin Offering',
        subtitle: 'Join our ICO Phase 1',
        body: `
          <div style="text-align: left;">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 10px; font-size: 1.1em;">ICO Details</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.9em;">
                <div>Start Date:</div><div>June 1, 2024</div>
                <div>End Date:</div><div>July 31, 2024</div>
                <div>Token Price:</div><div>0.0001 ETH</div>
                <div>Soft Cap:</div><div>1000 ETH</div>
                <div>Hard Cap:</div><div>5000 ETH</div>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 10px; font-size: 1.1em;">Token Distribution</h3>
              <div style="background: #f5f5f5; padding: 10px; border-radius: 8px; font-size: 0.9em;">
                <div style="margin-bottom: 8px;">• 40% - Public Sale</div>
                <div style="margin-bottom: 8px;">• 25% - Development</div>
                <div style="margin-bottom: 8px;">• 15% - Team & Advisors</div>
                <div style="margin-bottom: 8px;">• 10% - Marketing</div>
                <div>• 10% - Reserve</div>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 10px; font-size: 1.1em;">How to Participate</h3>
              <ol style="padding-left: 20px; font-size: 0.9em;">
                <li style="margin-bottom: 8px;">Connect your wallet</li>
                <li style="margin-bottom: 8px;">Enter the amount of ETH you want to invest</li>
                <li style="margin-bottom: 8px;">Confirm the transaction</li>
                <li>Receive your tokens immediately</li>
              </ol>
            </div>

            <div style="background: #fff3cd; color: #856404; padding: 10px; border-radius: 8px; font-size: 0.85em; margin-top: 15px;">
              ⚠️ Minimum contribution: 0.1 ETH
              Maximum contribution: 10 ETH per wallet
            </div>
          </div>
        `,
        footer: `
          <button style="
            background: linear-gradient(45deg, #0000FF, #FF0000);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.2s ease;
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            Participate in ICO
          </button>
        `
      },
      token: {
        title: 'The K Token',
        subtitle: 'Cryptocurrency brought to the next level',
        body: `
          <div class="hero-body has-text-centered">
            <div class="columns">
              <div class="column is-6 is-offset-3">
                <div class="token-image">
                  <img src="/img/illustrations/krypton-token.svg">
                </div>
                <h1 class="title is-2 is-light is-semibold is-spaced main-title">The K Token</h1>
                <h2 class="subtitle is-5 is-light is-thin">Cryptocurrency brought to the next level. Join our ICO for supercharged rates.</h2>
                <!-- CTA -->
                <p>
                  <a href="/#start" class="button k-button k-primary raised has-gradient is-fat is-bold">
                    <span class="text">More details</span>
                    <span class="front-gradient"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        `,
        footer: `
          <button style="
            background: linear-gradient(45deg, #0000FF, #FF0000);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.2s ease;
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            More details
          </button>
        `
      },
      roadmap: {
        title: 'Project Roadmap',
        subtitle: 'Our Journey',
        body: '<p>Roadmap details will be displayed here...</p>',
        footer: '<button>Download Whitepaper</button>'
      },
      wallet: {
        title: 'Connect Wallet',
        subtitle: 'Choose your wallet',
        body: '<p>Wallet connection options will be displayed here...</p>',
        footer: '<button>Connect MetaMask</button>'
      }
    };
    return contents[section as keyof typeof contents];
  }
}