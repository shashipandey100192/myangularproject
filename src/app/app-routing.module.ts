import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MypageComponent } from './mypage/mypage.component';
import { MytableComponent } from './mytable/mytable.component';
import { WallComponent } from './wall/wall.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
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
    path:'wall',
    component:WallComponent
  },
  {
    path:'page',
    component:MypageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
