import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then( m => m.HomePage)
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/tabs/search/search.page').then( m => m.SearchPage)
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/tabs/cart/cart.page').then( m => m.CartPage)
      },
      {
        path: 'account',
        loadComponent: () => import('./pages/tabs/account/account.page').then( m => m.AccountPage)
      },
    ],
  },  
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  }
];
