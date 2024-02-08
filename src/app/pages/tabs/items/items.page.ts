import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
;
import { ItemDetailComponent } from 'src/app/components/item-detail/item-detail.component';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { cart, add, remove } from 'ionicons/icons';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ItemDetailComponent]
})
export class ItemsPage implements OnInit {

  restaurants = [
    {
      id: 1,
      cover: 'assets/images/1.jpg',
      name: 'Butequim',
      shortName: 'butequim',
      address: 'Castelo, São Paulo, Vitória',
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
      ddress: 'Castelo, São Paulo, Vitória',
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
      ddress: 'Castelo, São Paulo, Vitória',
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

  #route = inject(ActivatedRoute);

  #navController = inject(NavController);

  id = signal<number | null>(null);

  data: any = {};

  items: any[] = [];

  categories: any = [];

  constructor() {
    addIcons({
      cart,
      add,
      remove,
    })
  }

  ngOnInit() {
    this.#route.params.subscribe(({ id }) => {
      if (!id) this.#navController.back();

      this.id.set(id);

    });
  }


}
