import { Routes } from '@angular/router';
import {Start} from './start/start';
import {Menu} from './menu/menu';

export const routes: Routes = [
  {path: '', component: Start},
  {path: 'menu', component: Menu},
];
