import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-who-watch',
  templateUrl: './who-watch.component.html',
  styleUrls: ['./who-watch.component.scss'],
})
export class WhoWatchComponent implements OnInit {
  favoriteShows: string[] = [
    'Breaking Bad',
    'Game of thrones',
    'Witcher',
    'Too hot to handle',
    'Better Call Saul',
    'The office',
  ];

  x: number = 0;
  y: number = 0;

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
    if (this.users) {
      this.users?.[userIdx]?.shows?.splice(showIdx, 1);
    }
  }

  removeUser(userId: number): void {
    console.log(userId);
    let newUsers: User[];
    newUsers = this.users.filter((user) => user.id !== userId);
    this.users = newUsers;
  }

  createUser(ev: any): void {
    ev.preventDefault();
    // console.log(ev);
    console.log(ev);
  }
  mouseMove: any;

  ngOnInit(): void {
    // fromEvent(document, 'click').subscribe(event => console.log(event))
    this.mouseMove = fromEvent(document, 'mousemove');
    this.mouseMove.subscribe((ev: any): void => {
      this.y = ev.clientY;
      this.x = ev.clientX;
    });
  }
  ngOnDestroy(): void {
    this.mouseMove.unsubscribe(() => console.log('unsubscribed'));
  }
}
