import {Component} from '@angular/core';
import {ContactoComponent} from './shared/contacto/contacto.component';
import {TitleComponent} from './shared/title/title.component';
import {FooterComponent} from './shared/footer/footer.component';
import {MenuComponent} from './shared/menu/menu.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    ContactoComponent,
    TitleComponent,
    FooterComponent,
    RouterOutlet,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
