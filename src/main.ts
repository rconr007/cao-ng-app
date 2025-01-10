import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CircularModalComponent } from './app/components/circular-modal/circular-modal.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { ModalService } from './app/services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CircularModalComponent, NavbarComponent, HeroComponent],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-circular-modal></app-circular-modal>
  `
})
class App {
  constructor(private modalService: ModalService) {}
}

bootstrapApplication(App, {
  providers: [ModalService]
}).catch(err => console.error(err));