import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BookDesignService } from '../services/book-design.service';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  myForm: FormGroup;
  formData: any = {};

  @Input() src = "../assets/images/Kitchen1.jpg";
  @Input() alt= "Kitchen Image";

  cards: string[] = Array.from({ length: 8 }, (_, i) => `../assets/images/endToEnd/img${i + 1}.jpg`);
  displayedCards: string[] = [];
  currentIndex = 0;
  pageSize = 4;

  constructor(private http: HttpClient, private bookDesign: BookDesignService, private router: Router) {}

  ngOnInit() {
    this.updateDisplayedCards();
  }

  onFormSubmit(formValue: any): void {
    this.bookDesign.saveUser(formValue).subscribe(result => console.log(result));

    }

    updateDisplayedCards() {
      this.displayedCards = this.cards.slice(this.currentIndex, this.currentIndex + this.pageSize);
    }
  
    nextPage() {
      if (this.currentIndex + this.pageSize < this.cards.length) {
        this.currentIndex += this.pageSize;
        this.updateDisplayedCards();
      }
    }
  
    prevPage() {
      if (this.currentIndex - this.pageSize >= 0) {
        this.currentIndex -= this.pageSize;
        this.updateDisplayedCards();
      }
    }


    goToEstimatePage() {
      this.router.navigate(['/estimate']);
    }
  }



