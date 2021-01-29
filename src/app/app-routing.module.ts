import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { AllPlayerComponent } from './components/all-player/all-player.component';
import { ContacttComponent } from './components/contactt/contactt.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditAddComponent } from './components/edit-add/edit-add.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatcheComponent } from './components/matche/matche.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactt', component: ContacttComponent },
  { path: 'matche', component: MatcheComponent },
  { path: 'all-matches', component: AllMatchesComponent },
  { path: 'add-match', component: AddMatchComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'all-player', component: AllPlayerComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'display-match/:id', component: DisplayMatchComponent },
  { path: 'display-player/:id', component: DisplayPlayerComponent },
  { path: 'edit-match/:id', component: EditMatchComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'edit-add', component: EditAddComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
