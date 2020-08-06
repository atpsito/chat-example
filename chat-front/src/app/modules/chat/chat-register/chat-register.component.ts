import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chat-register',
  templateUrl: './chat-register.component.html',
  styleUrls: ['./chat-register.component.css']
})
export class ChatRegisterComponent implements OnInit {
  nombre;

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  guardarNombre(): void {
    this.cookieService.set( 'Name', this.nombre);
    this.router.navigate(['chat', 'room']);
  }

}
