import { Routes } from '@angular/router';
import {ContactoComponent} from './shared/contacto/contacto.component';
import {CardComponent} from './shared/card/card.component';
import {FooterComponent} from './shared/footer/footer.component';
import {DetailComponent} from './shared/detail/detail.component';
import {TableComponent} from './shared/table/table.component';

export const routes: Routes = [
  {
    path:'cards',
    component: CardComponent,
  },
  {
    path:'posts',
    component:TableComponent
  },
  {
    path:'detail/:id',
    component:DetailComponent
  }
];
