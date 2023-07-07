import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerDatailPage } from './player-datail.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerDatailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerDatailPageRoutingModule {}
