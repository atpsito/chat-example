import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  nombre;

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.nombre = this.cookieService.get('Name');
  }

}
