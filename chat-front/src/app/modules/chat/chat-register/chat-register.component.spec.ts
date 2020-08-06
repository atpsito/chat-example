import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRegisterComponent } from './chat-register.component';

describe('ChatRegisterComponent', () => {
  let component: ChatRegisterComponent;
  let fixture: ComponentFixture<ChatRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
