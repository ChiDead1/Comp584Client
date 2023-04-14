import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { saveNovelReadComponent } from './saveNovelRead/saveNovelRead.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NovelLibaryComponent } from './novel-libary/novel-libary.component'
import { AngularMaterialModule } from './angular-material.moudle';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './login/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    saveNovelReadComponent,
    NovelLibaryComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
