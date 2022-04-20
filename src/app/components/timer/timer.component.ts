import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  constructor() {}

  timeNow: number = 1000 * 60;

  intervalId: number = 0;

  get timeLeft(): string {
    if (this.timeNow < 100) return '00:00';
    const timeStamp = new Date(this.timeNow);

    return timeStamp.toLocaleTimeString([], {
      minute: '2-digit',
      second: '2-digit',
    });
  }

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.timeNow -= 1000;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
