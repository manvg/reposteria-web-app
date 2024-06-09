import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TortasComponent } from './components/tortas/tortas.component';
import { CheesecakesComponent } from './components/cheesecakes/cheesecakes.component';

export const routes: Routes = [
    {path: '', redirectTo: '/cheesecakes', pathMatch: 'full'},
    {path: 'cheesecakes', component: CheesecakesComponent}
];
