import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatRegisterComponent} from './chat-register/chat-register.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';

const routes: Routes = [
  {
    path: 'register',
    component: ChatRegisterComponent
  },
  {
    path: 'room',
    component: ChatRoomComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
