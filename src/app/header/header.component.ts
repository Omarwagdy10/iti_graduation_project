import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router : Router){}

  redirect1(){
    this.router.navigate([`admin`])

  }

  redirect2(){
    this.router.navigate(['user'])
  }

  
  redirect3(){
    this.router.navigate(['login'])
  }
}
