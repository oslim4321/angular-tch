import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersType } from './type.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpObj: UsersType = {
    fullName: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  // Save new user to localStorage
  saveToStorage(newUser: UsersType, existingUsers?: UsersType[]): void {
    const users: UsersType[] = existingUsers ? [...existingUsers] : [];
    users.push(newUser);

    console.log(users, 'users');
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Handle form submission
  handleSubmitForm() {
    if (this.signUpObj.password === this.signUpObj.confirm_password) {
      // Fetch existing users from localStorage
      const isLocalData = localStorage.getItem('users');
      const users: UsersType[] = isLocalData ? JSON.parse(isLocalData) : [];

      // Check if the user already exists
      const existUser = users?.some((user: UsersType) => {
        return user.email === this.signUpObj.email;
      });

      // If user exists, show an alert, otherwise save the new user
      if (existUser) {
        alert('User already exists, please login');
      } else {
        this.saveToStorage(this.signUpObj, users); // Save the new user along with existing users
        alert('Account created successfully!');
      }
    } else {
      alert('Passwords do not match');
    }
  }
}
