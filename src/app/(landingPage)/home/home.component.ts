import { Component } from '@angular/core';
import { MissionComponent } from '../mission/mission.component';
import { Section4Component } from '../section4/section4.component';
import { Section5Component } from '../section5/section5.component';
import { Section6Component } from '../section6/section6.component';
import { TodolistComponent } from '../../todolist/todolist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MissionComponent,
    Section4Component,
    Section5Component,
    Section6Component,
    TodolistComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
