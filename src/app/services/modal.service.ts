import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ModalContent {
  isOpen: boolean;
  isExpanded: boolean;
  title: string;
  subtitle: string;
  body: string;
  footer: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private initialState: ModalContent = {
    isOpen: false,
    isExpanded: false,
    title: '',
    subtitle: '',
    body: '',
    footer: ''
  };

  private modalContent = new BehaviorSubject<ModalContent>(this.initialState);
  modalContent$ = this.modalContent.asObservable();

  updateContent(content: Partial<ModalContent>) {
    // Only force isExpanded to false when opening a new modal (isOpen is true in content)
    const newContent = {
      ...this.modalContent.value,
      ...content,
      isExpanded: content.isOpen ? false : content.isExpanded ?? this.modalContent.value.isExpanded
    };
    this.modalContent.next(newContent);
  }

  toggleModal(isOpen: boolean) {
    if (!isOpen) {
      // When closing, reset to initial state
      this.reset();
    } else {
      // When opening, just update isOpen
      this.updateContent({ isOpen });
    }
  }

  toggleExpand(isExpanded: boolean) {
    this.updateContent({ isExpanded });
  }

  reset() {
    this.modalContent.next(this.initialState);
  }
}