import {Component} from '@angular/core';
import {ContactoComponent} from './shared/contacto/contacto.component';
import {CardComponent} from './shared/card/card.component';
import {TitleComponent} from './shared/title/title.component';
import {FooterComponent} from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    ContactoComponent,
    CardComponent,
    TitleComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
