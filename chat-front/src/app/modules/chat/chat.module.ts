import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRegisterComponent } from './chat-register/chat-register.component';
import {ChatRoutingModule} from './chat-routing.module';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import {FormsModule} from '@angular/forms';
import {CookieService} from "ngx-cookie-service";



@NgModule({
  declarations: [
    ChatRegisterComponent,
    ChatRoomComponent
  ],
  imports: [
    ChatRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    CookieService,
  ]
})
export class ChatModule { }
