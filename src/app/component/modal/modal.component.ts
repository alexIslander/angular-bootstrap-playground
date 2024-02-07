import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html'
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('exampleModal') helloEl?: ElementRef;
  @ViewChild('exampleModalToggle') helloToggle?: ElementRef;
  @ViewChild('exampleModalToggle2') helloToggle2?: ElementRef;
  modal?: bootstrap.Modal;
  modalToggle?: bootstrap.Modal;
  modalToggle2?: bootstrap.Modal;

  ngAfterViewInit() {
    this.modal = new bootstrap.Modal(this.helloEl?.nativeElement, {});
    this.modalToggle = new bootstrap.Modal(this.helloToggle?.nativeElement, {});
    this.modalToggle2 = new bootstrap.Modal(this.helloToggle2?.nativeElement, {});
  }

  trigger() {
    this.modal?.toggle();
    console.log('Toggle modal:' + this.helloEl?.nativeElement);
  }

  openFirstToggleModal() {
    this.modalToggle?.show();
  }

  openSecondToggleModal() {
    this.modalToggle?.hide();
    this.modalToggle2?.show();
  }

  closeSecondToggleModal() {
    this.modalToggle2?.hide();
    this.modalToggle?.show();
    console.log('Close second toggle modal:' + this.helloToggle2?.nativeElement);
  }
}
