import { Component } from '@angular/core';
import {RecursosService} from '../../servicios/recursos.service';
import {Posts} from '../../interfaz/posts';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  posts:Posts[]=[]

  constructor(
    private service: RecursosService,
    private route: Router,
  ) {
    this.service.obtenerPosts().subscribe(response =>{
        this.posts = response as Posts[];
    })
  }

  obtenerId(id: number) {
    this.route.navigate(['detail',id])
  }
}
