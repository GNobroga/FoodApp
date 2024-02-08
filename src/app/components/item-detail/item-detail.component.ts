import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ItemDetailComponent  implements OnInit {

  constructor() {
    addIcons({
      star,
    });
  }

  ngOnInit() {}

}
