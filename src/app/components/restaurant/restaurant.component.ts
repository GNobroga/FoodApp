import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class RestaurantComponent  implements OnInit {

  @Input({ required: true }) restaurant: any;

  constructor() { }

  ngOnInit() {}

}
