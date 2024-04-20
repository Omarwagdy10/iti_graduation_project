import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';

type State = { id: number; name: string };

const states = [
  'shose',
  'pens'
];

@Component({
  selector: 'app-second-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NgbTypeaheadModule,
    FormsModule,
    JsonPipe,
    NgbCarouselModule,
    NgbTypeaheadModule,
    FormsModule,
    NgbCarouselModule,
    ChartModule,
    ButtonModule,
    CardModule,
  FormsModule,
  FontAwesomeModule],
  templateUrl: './second-header.component.html',
  styleUrl: './second-header.component.css'
})
export class SecondHeaderComponent {
  model: State | null = null;
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  formatter = (result: string) => result.toUpperCase();

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term === ''
          ? []
          : states
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );

constructor(private router : Router){}

redirect(){

  this.router.navigate([`profile`])

}


redirect2(){

  this.router.navigate([`invoices`])

}



redirect3(){

  this.router.navigate([`login`])

}

// =============================


}

