import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map, } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private http: Http, private response: Response) { }

  getAlbum(id: number): any {
    return this.http.get(this._albumUrl).map(response => response.json())


  }
}
