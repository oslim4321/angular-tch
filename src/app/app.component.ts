import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './(landingPage)/mission/mission.component';
import { Section4Component } from './(landingPage)/section4/section4.component';
import { Section5Component } from './(landingPage)/section5/section5.component';
import { Section6Component } from './(landingPage)/section6/section6.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutComponent,
    MissionComponent,
    Section4Component,
    Section5Component,
    Section6Component,
    FooterComponent,
    HeaderComponent,
    TodolistComponent,
    ChildComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'SQI STUDENT';
  name: string = 'selim';
  isDisbled: boolean = false;
  isDanger = false;
  message: string = '';
  msg: string = '';
  todo: string = 'THis is a default todo';
  messageFromChild = '';

  handleClick() {
    // alert('i have been click');

    console.log(this.title);
  }

  handleAddToCart() {
    this.message = 'item added to cart';
  }

  handleKeyUp(event: KeyboardEvent) {
    console.log(event);

    // if (event.key === 'Enter') {
    const targ = event.target as HTMLInputElement;
    this.msg = targ.value;
  }
  // }

  // one way data exampe
  handleTodo() {
    console.log(this.todo);
  }

  receiveData(data: string) {
    this.messageFromChild = data;
  }
}
