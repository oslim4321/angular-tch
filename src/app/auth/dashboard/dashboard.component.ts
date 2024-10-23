import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersType } from '../sign-up/type.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  router = inject(Router);
  user = { email: '', fullName: '' };

  ngOnInit() {
    let localCurrentUserString = localStorage.getItem('currentUser');

    if (localCurrentUserString) {
      let currentUser = JSON.parse(localCurrentUserString);
      this.user = currentUser;
    } else {
      this.router.navigate(['/login']);
    }
  }

  handleLogout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
