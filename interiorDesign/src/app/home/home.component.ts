import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BookDesignService } from '../services/book-design.service';
import { Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

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
  constructor(private http: HttpClient, private bookDesign: BookDesignService) {}

  ngOnInit() {

  }

  onFormSubmit(formValue: any): void {
    this.bookDesign.saveUser(formValue).subscribe(result => console.log(result));

    }

  }



