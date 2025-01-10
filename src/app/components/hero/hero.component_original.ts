import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to the Tribe</h1>
        <p class="slogan">Join the revolution of decentralized communities</p>
        <div class="action-buttons">
          <button (click)="openModal('learn')" class="learn-more">LEARN MORE</button>
          <button (click)="openModal('join')" class="join-tribe">JOIN THE TRIBE</button>
        </div>
      </div>
      <div class="tribe-members">
        <div class="orb orb1" (click)="openModal('member1')"></div>
        <div class="orb orb2" (click)="openModal('member2')"></div>
        <div class="orb orb3" (click)="openModal('member3')"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6rem 2rem 2rem;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      flex: 1;
      max-width: 600px;
      z-index: 1;

      h1 {
        font-size: 4rem;
        margin-bottom: 1rem;
      }

      .slogan {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        opacity: 0.8;
      }
    }

    .action-buttons {
      display: flex;
      gap: 1rem;

      button {
        padding: 1rem 2rem;
        border: none;
        border-radius: 25px;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }

      .learn-more {
        background: white;
        color: black;
      }

      .join-tribe {
        background: linear-gradient(45deg, #0000FF, #FF0000);
        color: white;
      }
    }

    .tribe-members {
      position: relative;
      width: 400px;
      height: 400px;

      .orb {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        cursor: pointer;
        transition: transform 0.3s ease;
        animation: float 3s infinite ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }

      .orb1 {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        animation-delay: 0s;
      }

      .orb2 {
        bottom: 50px;
        left: 50px;
        animation-delay: 1s;
      }

      .orb3 {
        bottom: 50px;
        right: 50px;
        animation-delay: 2s;
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @media (max-width: 968px) {
      .hero {
        flex-direction: column;
        text-align: center;
        padding-top: 8rem;
      }

      .hero-content {
        margin-bottom: 3rem;

        h1 {
          font-size: 3rem;
        }
      }

      .action-buttons {
        justify-content: center;
      }

      .tribe-members {
        width: 300px;
        height: 300px;

        .orb {
          width: 80px;
          height: 80px;
        }
      }
    }
  `]
})
export class HerosComponent {
  constructor(private modalService: ModalService) {}

  openModal(type: string) {
    const content = this.getModalContent(type);
    this.modalService.updateContent({
      isOpen: true,
      ...content
    });
  }

  private getModalContent(type: string) {
    const contents = {
      learn: {
        title: 'Learn More',
        subtitle: 'About Our Project',
        body: '<p>Detailed information about our project will be displayed here...</p>',
        footer: '<button>Download Whitepaper</button>'
      },
      join: {
        title: 'Join the Tribe',
        subtitle: 'Become a Member',
        body: '<p>Membership details and benefits will be displayed here...</p>',
        footer: '<button>Apply Now</button>'
      },
      member1: {
        title: 'Tribe Leader',
        subtitle: 'Core Team Member',
        body: '<p>Leader profile and responsibilities...</p>',
        footer: '<a href="#">Connect on LinkedIn</a>'
      },
      member2: {
        title: 'Tech Guru',
        subtitle: 'Development Lead',
        body: '<p>Tech lead profile and achievements...</p>',
        footer: '<a href="#">Connect on GitHub</a>'
      },
      member3: {
        title: 'Community Manager',
        subtitle: 'Social Lead',
        body: '<p>Community manager profile and initiatives...</p>',
        footer: '<a href="#">Follow on Twitter</a>'
      }
    };
    return contents[type as keyof typeof contents];
  }
}