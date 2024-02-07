import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicSlides } from '@ionic/angular';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { RestaurantComponent } from 'src/app/components/restaurant/restaurant.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BannerComponent,
    RestaurantComponent,
  ],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];

  banners: string[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
  ];

  constructor() {}

  ngOnInit() {}
}
