import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.css']
})
export class WardrobeComponent {
  @Input() src ='../assets/images/wardrobe.jpg';

}
