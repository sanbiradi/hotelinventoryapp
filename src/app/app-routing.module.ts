import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './rooms/login/login.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate:[LoginGuard] },
  {path:'rooms', loadChildren:()=>import('./rooms/rooms.module').then((m)=>m.RoomsModule),canActivate:[LoginGuard]},
  //lazy loading without make manual adding module in app.module we perform lazy loading to perform 
  //adding module while user trying to visit rooms

  { path:'login' , component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'booking/:id', loadChildren: () => import('./header/booking/booking.module').then(m => m.BookingModule)},
  { path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  // canActivate:[LoginGuard]
  // { path: '**', component: NotfoundComponent }, //wild card wrong route string
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
