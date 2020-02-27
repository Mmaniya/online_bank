import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './authorization/auth-guard.guard';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { AtmprocessComponent } from './atmprocess/atmprocess.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { HackerComponent } from './hacker/hacker.component';
import { HockerhomeComponent } from './hacker/hockerhome/hockerhome.component';

const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'useraccount', component : UseraccountComponent},
  {path: 'atm', component : AtmprocessComponent},
  {path: 'withdraw', component : WithdrawComponent},
  {path: 'hacker', component : HackerComponent},
  {path: 'hack', component : HockerhomeComponent},

  // {path: '**', redirectTo : 'dashboard'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
