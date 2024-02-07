import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonSearchbar, ViewDidEnter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SearchPage implements OnInit, ViewDidEnter {

  @ViewChild('searchBar') searchBar!: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  ionViewDidEnter(): void {
    this.searchBar.setFocus();
  }


  public onSearchChange(event: any) {
    console.log(event.detail.value)
  }
}
