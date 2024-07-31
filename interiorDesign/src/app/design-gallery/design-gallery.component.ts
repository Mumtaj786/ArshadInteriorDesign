import { Component, Input } from '@angular/core';
import { BookDesignService } from '../services/book-design.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-design-gallery',
  templateUrl: './design-gallery.component.html',
  styleUrls: ['./design-gallery.component.css']
})
export class DesignGalleryComponent {
  @Input() src="../assets/images/DesignGallery.jpg";
  @Input() alt = "Design-Gallery";

  constructor(private http: HttpClient, private bookDesign: BookDesignService){}

  onFormSubmit(formValue: any): void {
    this.bookDesign.saveUser(formValue) .subscribe(result => console.log(result));

    }

}
