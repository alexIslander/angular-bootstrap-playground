import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements AfterViewInit {
  @ViewChild('defaultButton', { static: false }) defaultButton!: ElementRef;
  @ViewChild('infoButton', { static: false }) infoButton!: ElementRef;
  @ViewChild('successButton', { static: false }) successButton!: ElementRef;
  @ViewChild('warningButton', { static: false }) warningButton!: ElementRef;
  @ViewChild('errorButton', { static: false }) errorButton!: ElementRef;
  toastType: string = '';

  ngAfterViewInit() {
    setTimeout(() => {
      this.logButtonElements();
    }, 100);
  }

  logButtonElements() {
    console.log('Default Button:', this.defaultButton?.nativeElement);
    console.log('Info Button:', this.infoButton?.nativeElement);
    console.log('Success Button:', this.successButton?.nativeElement);
    console.log('Warning Button:', this.warningButton?.nativeElement);
    console.log('Error Button:', this.errorButton?.nativeElement);
  }

  showToast(toastTypeParam: string) {
    this.toastType = toastTypeParam;
    const toastElement = document.querySelector('.toast');
    const toastBody = toastElement?.querySelector('.toast-body');
    toastElement!.classList.remove('default-toast', 'info-toast', 'success-toast', 'warning-toast', 'error-toast');

    const toastMessages: Record<string, string> = {
      default: 'Hello, world! This is a default toast message.',
      info: 'Hello, world! This is an info toast message.',
      success: 'Hello, world! This is a success toast message.',
      warning: 'Hello, world! This is a warning toast message.',
      error: 'Hello, world! This is an error toast message.'
    };

    if (this.toastType in toastMessages) {
      toastBody!.textContent = toastMessages[this.toastType];
      toastElement!.classList.add(`${this.toastType}-toast`, 'show');

      setTimeout(() => {
        toastElement!.classList.remove('show');
      }, 2500);
    }
  }
}
