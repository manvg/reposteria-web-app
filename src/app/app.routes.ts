import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TortasComponent } from './components/tortas/tortas.component';

export const routes: Routes = [
    {path: '', redirectTo: '/tortas', pathMatch: 'full'},
    {path: 'tortas', component: TortasComponent}
];
