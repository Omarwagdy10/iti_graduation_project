import { HttpClient } from '@angular/common/http';
import { UserService } from './../services/user.service';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userregesterform: FormGroup;

  username!: string;
  email!: any;
  password!: any;
  name!: string;
  country!: string;
  Img!: string;
  education!: string;
  certifications!: string;
  bio!: string;
  profile_picture!: any;
  error: any = [];

  UserService = inject(UserService);
  constructor(private http: HttpClient, private router: Router) {
    this.userregesterform = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      email: new FormControl('', [Validators.required, Validators.email]),

      password: new FormControl('', [Validators.required]),

      // Example:2908kAls
      // const PASSWORD_PATTERN = '/^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/';

      name: new FormControl('', [Validators.required, Validators.minLength(3)]),

      Img: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      education: new FormControl('', [Validators.required]),

      country: new FormControl('', [Validators.required]),

      certifications: new FormControl('', [Validators.required]),

      bio: new FormControl('', [Validators.required]),
    });
  }

  handelSubmitform() {
    // console.log(this.userregesterform.value);
    const url =
      'http://localhost/php-final-project/server/routes/users/insert-user.php';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.userregesterform.value),
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        // Assuming the response JSON contains a property named "token"
        if (res.token) {
          localStorage.setItem('user-token', res.token);

          this.router.navigate([`profile`]);
        } else {
         
        }
      })
  }
}
