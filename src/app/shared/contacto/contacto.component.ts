import {Component} from '@angular/core';

export interface Media {
  id: string;
  name: string;
}

@Component({
  selector: 'contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  title: string = 'Contact';

  socialMedia: Media[] =
    [
      {
        id: "Twitter",
        name: "Follow on Twitter"
      },
      {
        id: "Facebook",
        name: "Like on Facebook"
      },
      {
        id: "Mail",
        name: "Email me"
      },
      {
        id: "Instagram",
        name: "Follow on Instagram"
      }
    ]

}
