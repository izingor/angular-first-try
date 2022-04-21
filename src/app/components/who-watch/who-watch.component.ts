import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-who-watch',
  templateUrl: './who-watch.component.html',
  styleUrls: ['./who-watch.component.scss'],
})
export class WhoWatchComponent implements OnInit {
  constructor() {}

  users: User[] = [
    {
      id: 101,
      name: 'Roni',
      shows: ['Breaking Bad', 'Game of thrones', 'Witcher'],
    },
    {
      id: 102,
      name: 'Makorni',
      shows: ['Too hot to handle', 'Game of thrones', 'Witcher'],
    },
    {
      id: 103,
      name: 'Pepperoni',
      shows: ['Better Call Saul', 'Game of thrones', 'Witcher'],
    },
  ];

  removeShow(showIdx: number, userIdx: number): void {

    if(this.users) {
      this.users?.[userIdx]?.shows?.splice(showIdx, 1);
    }

  }
  ngOnInit(): void {}
}
