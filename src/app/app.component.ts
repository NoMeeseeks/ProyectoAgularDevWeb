import {Component} from '@angular/core';
import {ContactoComponent} from './shared/contacto/contacto.component';
import {CardComponent} from './shared/card/card.component';
import {TitleComponent} from './shared/title/title.component';

@Component({
  selector: 'app-root',
  imports: [
    ContactoComponent,
    CardComponent,
    TitleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
