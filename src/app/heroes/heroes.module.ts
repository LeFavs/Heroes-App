import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroHomeComponent } from './pages/hero-home/hero-home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroCardComponent } from './component/hero-card/hero-card.component';
import { ImgfavsPipe } from './pipes/imgfavs.pipe';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';






@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroComponent,
    HeroHomeComponent,
    ListComponent,
    HeroCardComponent,
    ImgfavsPipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
