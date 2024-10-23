import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router = inject(Router);
  name1 = 'this kis default';
  name = 'THis is default value';

  user = 'Oslim';
  handleKeyUp1() {
    console.log(this.name1);
  }

  handleKeyUp() {
    console.log(this.name);
  }

  lists = [
    'mango',
    'cherry',
    'cheese',
    'banana',
    'apple',
    'orange',
    'kiwi',
    'grape',
  ];

  handleNavigate() {
    this.router.navigate(['/']);
  }
}
