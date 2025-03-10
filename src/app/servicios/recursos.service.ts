import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(
    private http: HttpClient,
  ) { }

  obtenerDatos(){
    return this.http.get('https://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json')
  }

  obtenerPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  obtenerDetallePosts(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
