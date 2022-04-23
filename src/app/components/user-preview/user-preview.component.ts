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
  @Output() removeUser = new EventEmitter<number>();

  onRemoveShow(showIdx: number): void {
    this.removeShow.emit(showIdx);
  }

  onRemoveUser(userId:number): void{
    this.removeUser.emit(userId);
    // console.log(userId);
    
  }

  constructor() {}

  ngOnInit(): void {}
}
