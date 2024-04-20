import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  main_img = '../assets/brand1.png'

  reternsrc(newsrc:any){
    console.log(newsrc);
    this.main_img= newsrc
    

  }
}
