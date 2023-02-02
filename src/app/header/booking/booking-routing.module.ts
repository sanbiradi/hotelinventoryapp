import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingGuard } from 'src/app/guards/booking.guard';
import { BookingComponent } from './booking.component';

const routes: Routes = [{ path: '', component: BookingComponent , canDeactivate:[BookingGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
