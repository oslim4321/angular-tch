import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsersType } from '../sign-up/type.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  loginObj = {
    email: '',
    password: '',
  };

  users: UsersType[] = [];

  ngOnInit() {
    let localUserString = localStorage.getItem('users');
    if (localUserString) {
      this.users = JSON.parse(localUserString);
    }
  }

  handleLogin() {
    // console.log(this.users);
    // console.log(this.loginObj);

    let user = this.users.find((user: UsersType) => {
      return user.email === this.loginObj.email;
    });

    if (!user) {
      return alert('user not found, please create an account');
    }

    if (user && user.password === this.loginObj.password) {
      let savedDAta = { email: user.email, fullName: user.fullName };
      localStorage.setItem('currentUser', JSON.stringify(savedDAta));
      alert('Logged in successfully!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid email or password');
    }
  }
}
