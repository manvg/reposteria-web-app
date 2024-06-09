import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TortasComponent } from './components/tortas/tortas.component';
import { CheesecakesComponent } from './components/cheesecakes/cheesecakes.component';
import { KuchensComponent } from './components/kuchens/kuchens.component';

export const routes: Routes = [
    {path: '', redirectTo: '/kuchens', pathMatch: 'full'},
    {path: 'kuchens', component: CheesecakesComponent}
];
