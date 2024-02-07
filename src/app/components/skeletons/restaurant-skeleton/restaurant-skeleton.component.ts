import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-skeleton',
  templateUrl: './restaurant-skeleton.component.html',
  styleUrls: ['./restaurant-skeleton.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class RestaurantSkeletonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
