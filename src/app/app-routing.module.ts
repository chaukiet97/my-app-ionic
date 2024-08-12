import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:() =>import('./modules/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'shop',
    loadChildren:() =>import('./modules/shop/shop.module').then(m=>m.ShopModule)
  },
  {
    path:'account',
    loadChildren:() =>import('./modules/account/account.module').then(m=>m.AccountModule)
  },
  {
    path:'settings',
    loadChildren:() =>import('./modules/settings/settings.module').then(m=>m.SettingsModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
