import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {RecursosService} from '../../servicios/recursos.service';
import {Posts} from '../../interfaz/posts';

@Component({
  selector: 'app-detail',
  imports: [
    RouterLink
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  id:number = 0;

  post: Posts | undefined;

  constructor(
    private service: RecursosService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe(params => {
      const paramId = params.get('id');
      this.id = paramId ? +paramId : 0; // Convierte el valor a número, si existe, sino asigna 0
      console.log(this.id); // Mostrar el id procesado
    });

    this.service.obtenerDetallePosts(this.id).subscribe(details =>{
        this.post = details as Posts;
    })

  }


}
