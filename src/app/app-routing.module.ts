import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailTeamPage } from './detail-team/detail-team.page';
import { DetailTeamByCountryPage } from './detail-team-by-country/detail-team-by-country.page';
import { PlayerDetailPage } from './player-detail/player-detail.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detail-team',
    loadChildren: () => import('./detail-team/detail-team.module').then(m => m.DetailTeamPageModule)
  },
  { path: 'detail/:id/:league', component: DetailTeamPage },
  {
    path: 'detail-team-by-country',
    loadChildren: () => import('./detail-team-by-country/detail-team-by-country.module').then(m => m.DetailTeamByCountryPageModule)
  },
  { path: 'detailTeamByCountry/:id/:country', component: DetailTeamByCountryPage },
  {
    path: 'player-detail',
    loadChildren: () => import('./player-detail/player-detail.module').then(m => m.PlayerDetailPageModule)
  },
  { path: 'player-detail/:playerId', component: PlayerDetailPage }, // Tambahkan rute untuk halaman PlayerDetailPage dengan parameter playerId
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
