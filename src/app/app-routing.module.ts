import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LandingComponent } from './landing/landing.component';
import { MypageComponent } from './mypage/mypage.component';
import { MytableComponent } from './mytable/mytable.component';
import { WallComponent } from './wall/wall.component';

const routes: Routes = [
  {
    path:'',
    component:LandingComponent
  },
  {
    path:'table',
    component:MytableComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'home',
    component:WallComponent
  },
  {
    path:'myhome',
    component:MypageComponent
  },
  {
    path:'**',
    component:ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
