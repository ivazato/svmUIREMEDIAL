import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Item} from '../../../shared/item';
import {baseURL} from '../../../shared/baseurl';
import {HttpClient} from '@angular/common/http';
import {ItemService} from '../../../services/item.service';
import {RequestService} from '../../../services/request.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss']
})
export class C2Component implements OnInit {

  items: Item[];
  public url = baseURL + 'items';
  selectedImage: ImageFlow;

  @Output() updateView = new EventEmitter();

  constructor(private http: HttpClient,
              @Inject('BaseURL') private BaseURL,
              public itemService: ItemService,
              private requestService: RequestService
  ) {
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  uploadImage(imageInput: any, id: number) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedImage = new ImageFlow(event.target.result, file);

      this.selectedImage.pending = true;
      this.itemService.setImageItem(this.selectedImage.file, id).subscribe(
        (res) => {
          window.location.reload();
        },
        (err) => {
          window.location.reload();
        });
    });

    reader.readAsDataURL(file);
  }

  onDelete(id: number) {
    this.requestService.delete(this.url, id).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        window.location.reload();
      }
    );
  }
}

class ImageFlow {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}
