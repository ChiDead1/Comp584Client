import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  saveNovelReadComponent } from './saveNovelRead/saveNovelRead.component';
import { LoginComponent } from './login/login.component';  
import { HomeComponent } from './home/home.component';
import { NovelLibaryComponent } from './novel-libary/novel-libary.component';
 

import { AuthGuard } from './login/auth.guard';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'saveNovelRead', component: saveNovelReadComponent },
  { path: 'login', component: LoginComponent },
  { path: 'novel-libary', component: NovelLibaryComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
