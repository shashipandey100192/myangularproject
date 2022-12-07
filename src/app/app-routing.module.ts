import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';



const routes: Routes = [
 {
  path:'',
  component:BlankComponent,
  children:[
    {
      path:'',
      redirectTo:'auth',
      pathMatch:'full',
    },
      {
        path:'auth',
       component:BlankComponent,
        loadChildren:()=> import('./modules/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path:'dashboard',
       component:BlankComponent,
        loadChildren:()=> import('./modules/dashbord/dashbord.module').then((m) => m.DashbordModule),
      }

  ],
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
