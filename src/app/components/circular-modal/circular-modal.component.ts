import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-circular-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="(modalService.modalContent$ | async)?.isOpen"
         class="modal-overlay"
         (click)="closeModal($event)">
      <div [class]="'modal-container' + ((modalService.modalContent$ | async)?.isExpanded ? ' expanded' : '')"
           (click)="$event.stopPropagation()">
        <div class="modal-background"></div>
        
        <!-- Row 1: Control buttons -->
        <div class="control-buttons">
          <button class="icon-button" (click)="toggleExpand()">
            <span *ngIf="!(modalService.modalContent$ | async)?.isExpanded">⤢</span>
            <span *ngIf="(modalService.modalContent$ | async)?.isExpanded">⤡</span>
          </button>
          <button class="icon-button" (click)="closeModal($event)">✕</button>
        </div>

        <!-- Row 2: Title and Subtitle -->
        <div class="header-section">
          <h2 class="title">{{ (modalService.modalContent$ | async)?.title }}</h2>
          <h3 class="subtitle">{{ (modalService.modalContent$ | async)?.subtitle }}</h3>
        </div>

        <!-- Row 3: Body Content -->
        <div class="body-section">
          <div class="body-content" [innerHTML]="(modalService.modalContent$ | async)?.body"></div>
        </div>

        <!-- Row 4: Footer -->
        <div class="footer-section">
          <div class="footer-content" [innerHTML]="(modalService.modalContent$ | async)?.footer"></div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      padding: 1rem;
    }

    .modal-container {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 50%;
      width: min(500px, 90vw);
      height: min(500px, 90vw);
      padding: clamp(15px, 3vw, 20px);
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      color: #333;
    }

    .modal-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('/caonaboapunta.png');
      background-size: cover;
      background-position: center;
      opacity: 0.15;
      z-index: 0;
    }

    .modal-container.expanded {
      width: min(800px, 85vw);
      height: min(600px, 80vh);
      max-width: calc(100%);
      border-radius: 20px;
      margin: 10px;
      padding: 15px;
    }

    .control-buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: clamp(10px, 2vw, 15px);
      flex-shrink: 0;
      position: relative;
      z-index: 2;
    }

    .icon-button {
      background: #fff;
      border: 2px solid #333;
      border-radius: 50%;
      width: clamp(24px, 5vw, 30px);
      height: clamp(24px, 5vw, 30px);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      font-size: clamp(14px, 3vw, 18px);
      color: #333;
      position: relative;
      z-index: 2;
    }

    .icon-button:hover {
      background: #f0f0f0;
    }

    .header-section {
      text-align: center;
      margin-bottom: clamp(10px, 2vw, 15px);
      flex-shrink: 0;
      position: relative;
      z-index: 1;
    }

    .title {
      font-size: clamp(1.2rem, 4vw, 1.5rem);
      margin: 0;
      color: #333;
      line-height: 1.2;
      position: relative;
      z-index: 2;
    }

    .subtitle {
      font-size: clamp(0.9rem, 3vw, 1rem);
      margin: 5px 0 0;
      color: #666;
      line-height: 1.2;
      position: relative;
      z-index: 2;
    }

    .body-section {
      flex: 1;
      min-height: 0;
      position: relative;
      z-index: 1;
      padding: 0 20px;
    }

    .modal-container.expanded .body-section {
      padding: 0 20px;
      max-width: calc(100% - 40px);
      max-height: calc(100% - 30px);
      margin: 5px 10px;
    }

    .body-content {
      height: 84%;
      overflow-y: auto;
      padding-right: 15px;
      padding-left: 5px;
      margin-right: -15px;
      font-size: clamp(0.9rem, 1.5vw, .75rem);
      line-height: 1.4;
      color: #333;
      position: relative;
      z-index: 2;
    }

    .modal-container.expanded .body-content {
      height: 100%;
      padding-right: 15px;
      padding-left: 5px;
      margin-right: -15px;
    }

    .body-content::-webkit-scrollbar {
      width: 4px;
    }

    .body-content::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 2px;
    }

    .body-content::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 2px;
    }

    .footer-section {
      text-align: center;
      padding: clamp(8px, 2vw, 10px) 0;
      margin-top: auto;
      flex-shrink: 0;
      font-size: clamp(0.9rem, 2.5vw, .75rem);
      position: relative;
      z-index: 2;
    }

    @media (max-width: 480px) {
      .modal-container {
        width: 95vw;
        height: 95vw;
        padding: 12px;
      }

      .modal-container.expanded {
        width: 92vw;
        height: 80vh;
        border-radius: 15px;
        margin: 8px;
        padding: 12px;
      }

      .modal-overlay {
        padding: 0;
      }

      .modal-container.expanded .body-section {
        padding: 0 15px;
        max-width: calc(100% - 30px);
        max-height: calc(100% - 24px);
        margin: 3px auto;
      }
    }
  `,
  ],
})
export class CircularModalComponent implements OnInit {
  constructor(public modalService: ModalService) {}

  ngOnInit() {}

  closeModal(event: MouseEvent) {
    event.preventDefault();
    this.modalService.toggleModal(false);
  }

  async toggleExpand() {
    const currentState = await firstValueFrom(this.modalService.modalContent$);
    this.modalService.toggleExpand(!currentState.isExpanded);
  }
}
