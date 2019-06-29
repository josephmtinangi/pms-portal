import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Room } from 'src/app/_models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  rooms: Array<Room> = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms():void {
    this.apiService.getRooms().subscribe((res: any) => {
      this.rooms = res.data.data
    })
  }

}
