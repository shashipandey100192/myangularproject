import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WallComponent } from './wall/wall.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MytableComponent } from './mytable/mytable.component';
import { MypageComponent } from './mypage/mypage.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    WallComponent,
    MytableComponent,
    MypageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
