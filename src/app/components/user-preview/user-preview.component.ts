import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss'],
})
export class UserPreviewComponent implements OnInit {
  @Input() user?: User;
  @Output() removeShow = new EventEmitter<number>();

  onRemoveShow(showIdx: number): void {
    this.removeShow.emit(showIdx);
    // console.log('user id', userId, 'show' , showIdx);
  }

  constructor() {}

  ngOnInit(): void {}
}
