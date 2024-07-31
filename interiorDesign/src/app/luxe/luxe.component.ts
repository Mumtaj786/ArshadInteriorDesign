import { Component, Input } from '@angular/core';
import { BookDesignService } from '../services/book-design.service';

import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-luxe',
  templateUrl: './luxe.component.html',
  styleUrls: ['./luxe.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0.5,
      fontSize:'0.5em' })),
      transition(':enter', [
        animate('2s ease-in-out', style({ opacity: 1, fontSize:'1em' }))
      ])
    ])
]
})
export class LuxeComponent {
  @Input() src ="../assets/images/Lotus DesignRoom.jpg" ;
  @Input() alt = "LotusDesignImage";
  textState: String;
  
  constructor(private bookDesign: BookDesignService){}
  ngOnInit(){
    this.textState = 'start';
    this.cardsObserver();
  }


  onFormSubmit(formValue: any): void {
    this.bookDesign.saveUser(formValue) .subscribe(result => console.log(result));

    }

    cardsObserver(){
      const cards = document.querySelectorAll('.stack-container .stacking-card');

  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('sticky');
          }  else {
          entry.target.classList.add('sticky');
          }
      });
    },  {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });
  
  }
}

    

