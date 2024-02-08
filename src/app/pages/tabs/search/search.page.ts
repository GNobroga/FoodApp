import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonSearchbar, ViewDidEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { RestaurantSkeletonComponent } from 'src/app/components/skeletons/restaurant-skeleton/restaurant-skeleton.component';
import { RestaurantComponent } from 'src/app/components/restaurant/restaurant.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RestaurantSkeletonComponent, RestaurantComponent]
})
export class SearchPage implements OnInit, ViewDidEnter, ViewWillLeave {

  @ViewChild('searchBar') searchBar!: IonSearchbar;

  isLoading = signal(false);

  query = '';

  source = [
    {
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
  ];

  restaurants: any[] = [];

  constructor() { }

  ionViewWillLeave(): void {
    this.restaurants = [];
    this.searchBar.value = '';
    this.query = '';
  }

  ngOnInit(): void {

  }

  ionViewDidEnter(): void {
    this.searchBar.setFocus();
  }


  public onSearchChange(event: any) {
    this.isLoading.set(true);

    this.restaurants = [];

    this.query = event.detail.value;

    this.restaurants = this.source.filter(
      x => this.query.trim() && x.shortName.includes(this.query.toLowerCase()));

    setTimeout(() => this.isLoading.set(false), 500);
  }
}
