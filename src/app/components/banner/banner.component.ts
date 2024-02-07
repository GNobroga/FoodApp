import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { IonicModule, IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  standalone: true,
  imports: [IonicModule],
  styleUrls: ['./banner.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent  implements OnInit {

  swiperModules = [IonicSlides];

  @Input({ required: true }) bannerImages: any[] = [];

  constructor() { }

  ngOnInit() {}

}
