import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  id:number = 0;

  constructor(private router: ActivatedRoute) {
    this.router.paramMap.subscribe(params => {
      const paramId = params.get('id');
      this.id = paramId ? +paramId : 0; // Convierte el valor a número, si existe, sino asigna 0
      console.log(this.id); // Mostrar el id procesado
    });
  }

}
