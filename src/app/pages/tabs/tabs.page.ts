import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { home, search, cart, person, chevronDown } from "ionicons/icons";
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export default class TabsPage {

  constructor() {
    addIcons({
      home,
      search,
      cart,
      person,
      chevronDown,
    });
  }


}
