import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicSlides } from '@ionic/angular';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { RestaurantComponent } from 'src/app/components/restaurant/restaurant.component';
import { RestaurantSkeletonComponent } from 'src/app/components/skeletons/restaurant-skeleton/restaurant-skeleton.component';
import { RouterLink } from '@angular/router';

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
    RestaurantSkeletonComponent
  ],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];

  banners: string[] = [];

  restaurants: any[] = [];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
        this.restaurants.push({
          id: 1,
          cover: 'assets/images/1.jpg',
          name: 'Butequim',
          shortName: 'butequim',
          cuisines: [
            'Brazilian',
            'American'
          ],
          rating: 3,
          deliveryTime: 50,
          distance: 5,
          price: 95,
        },
        {
          id: 2,
          cover: 'assets/images/2.jpg',
          name: 'Butequim',
          shortName: 'butequim',
          cuisines: [
            'Japonês',
            'American'
          ],
          rating: 3,
          deliveryTime: 50,
          distance: 5,
          price: 80,
        },
        {
          id: 3,
          cover: 'assets/images/3.jpg',
          name: 'Butequim',
          shortName: 'butequim',
          cuisines: [
            'Japonês',
            'American'
          ],
          rating: 3,
          deliveryTime: 50,
          distance: 5,
          price: 80,
        }
      );

      this.banners.push(
      'assets/images/1.jpg',
      'assets/images/2.jpg',
      'assets/images/3.jpg'
    )
    }, 500);
  }
}
