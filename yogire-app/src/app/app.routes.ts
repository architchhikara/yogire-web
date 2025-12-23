import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { DwijasComponent } from './pages/dwijas/dwijas';
import { AaharComponent } from './pages/aahar/aahar';
import { SrishtiComponent } from './pages/srishti/srishti';
import { AgastyaComponent } from './pages/agastya/agastya';
import { AgniComponent } from './pages/agni/agni';
import { YogafestComponent } from './pages/yogafest/yogafest';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dwijas', component: DwijasComponent },
  { path: 'aahar', component: AaharComponent },
  { path: 'srishti', component: SrishtiComponent },
  { path: 'agastya', component: AgastyaComponent },
  { path: 'agni', component: AgniComponent },
  { path: 'yogafest', component: YogafestComponent },
  // Wildcard route for 404
  { path: '**', redirectTo: '' }
];
