import {Injectable} from '@angular/core';
import {Item} from '../shared/item';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/delay';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    // return Observable.of(ITEMS).delay(2000);
    return <Observable<Item[]>>this.http.get(baseURL + 'items');
  }

  getItem(id: number): Observable<Item> {
    return <Observable<Item>>this.http.get(baseURL + 'items/' + id);
  }

  getFeaturedItem(): Observable<Item> {
    return <Observable<Item>>this.http.get(baseURL + 'items?featured=true');
  }

  getItemIds(): Observable<number[]> {
    return <Observable<number[]>>this.http.get(baseURL + 'items').pipe(map(items => (<Item[]>items).map(item => item.id)));
  }

  setImageItem(file: File, id: number): Observable<Response> {
    let fImage = new FormData();
    fImage.append('file', file);
    return this.http.post<Response>(baseURL + 'items/' + id + '/image', fImage);
  }

  deleteItem( url, id): Observable<any> {
    return this.http.delete(baseURL + '/' + id);
  }

}
