import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';
import {HttpClient} from '@angular/common/http';
import {AppURL} from '../shared/appUrl';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  items: Item[];
  itemMaq: FormGroup;
  public url = AppURL.getUrlItem();

  constructor(private http: HttpClient, private itemService: ItemService, private requestService: RequestService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.items = items);
    this.itemMaq = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      category: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      capacity: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      subCategoryId: new FormControl('', Validators.required)
    });
  }

  onSubmitItem() {
    this.requestService.add(this.url, this.itemMaq.value, []).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        window.location.reload();
      }
    );
    console.log( this.itemMaq.value);
  }

}
