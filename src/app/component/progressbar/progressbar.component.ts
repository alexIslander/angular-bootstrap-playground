import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent implements OnInit, OnDestroy {
  public progressBar = 'danger';
  public progress = 2;
  private subscription: Subscription | undefined;

  ngOnInit() {
    this.subscription = interval(80).subscribe(() => {
      this.progress += 1;

      if (this.progress < 25) {
        this.progressBar = 'danger';
      } else if (this.progress < 50) {
        this.progressBar = 'warning';
      } else if (this.progress < 75) {
        this.progressBar = 'info';
      } else {
        this.progressBar = 'success';
      }

      if (this.progress >= 100) {
        // Reset the progress if it reaches 100
        this.progress = 0;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
