import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerDatailPageRoutingModule } from './player-datail-routing.module';

import { PlayerDatailPage } from './player-datail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerDatailPageRoutingModule
  ],
  declarations: [PlayerDatailPage]
})
export class PlayerDatailPageModule {}
