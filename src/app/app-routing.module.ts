import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnsubscribeComponent } from './sections/unsubscribe/unsubscribe.component';
import { TakeWhileComponent } from './sections/take-while/take-while.component';
import { TakeUntilComponent } from './sections/take-until/take-until.component';

const routes: Routes = [
  { path: 'unsubscribe', component: UnsubscribeComponent },
  { path: 'take-while', component: TakeWhileComponent },
  { path: 'take-until', component: TakeUntilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
