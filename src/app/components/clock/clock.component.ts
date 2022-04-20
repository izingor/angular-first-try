import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  constructor() {}

  getTimeNow(): string {
    var timeStamp = new Date();

    return timeStamp.toLocaleTimeString([], {
      minute: '2-digit',
      second: '2-digit',
    });
  }

  intervalId: number = 0;
  time: Date = new Date();
  darkMode:boolean = false;

  get timeNow(): Date {
    return this.time;
  }
  get getSeasonNow(): string {
    const timeNow = new Date();
    const month = timeNow.getMonth();
    if (month < 3) {
      return 'winter';
    } else if (3 <= month && month <= 5) {
      return 'spring';
    } else if (5 < month && month <= 8) {
      return 'summer';
    } else {
      return 'autumn';
    }
  }
  toggleDarkMode(): void{
    this.darkMode = !this.darkMode
    console.log('toggled');
    
  }

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
