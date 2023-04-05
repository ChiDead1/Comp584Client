import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  saveNovelReadComponent } from './saveNovelRead/saveNovelRead.component';

import { HomeComponent } from './home/home.component';
import { NovelLibaryComponent } from './novel-libary/novel-libary.component';
 


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'saveNovelRead', component: saveNovelReadComponent },
  
  { path: 'novel-libary', component: NovelLibaryComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
