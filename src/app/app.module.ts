import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WallComponent } from './wall/wall.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MytableComponent } from './mytable/mytable.component';
import { MypageComponent } from './mypage/mypage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
 

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    WallComponent,
    MytableComponent,
    MypageComponent,
    NavbarComponent,
    LandingComponent,
    ErrorpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
