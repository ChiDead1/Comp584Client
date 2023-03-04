import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  saveNovelReadComponent } from './saveNovelRead/saveNovelRead.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'saveNovelRead', component: saveNovelReadComponent },
  { path: 'fetch-data', component: FetchDataComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
