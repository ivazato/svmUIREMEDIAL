import {Routes} from '@angular/router';

import {CatalogComponent} from '../catalog/catalog.component';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {AboutComponent} from '../about/about.component';

import {CategoryComponent} from '../catalog/category/category.component';
import {LlantasComponent} from '../catalog/category/llantas/llantas.component';
import {ExcavadorasComponent} from '../catalog/category/excavadoras/excavadoras.component';
import {BobcatsComponent} from '../catalog/category/bobcats/bobcats.component';
import {TractoresComponent} from '../catalog/category/tractores/tractores.component';
import {ModelComponent} from '../model/model.component';
import {BrandComponent} from '../catalog/brand/brand.component';
import {CapacityComponent} from '../catalog/capacity/capacity.component';
import {PriceComponent} from '../catalog/price/price.component';
import {RegistrarComponent} from '../registrar/registrar.component';
import {M1Component} from '../model/m1/m1.component';
import {M2Component} from '../model/m2/m2.component';
import {M3Component} from '../model/m3/m3.component';
import {ToyotaComponent} from '../catalog/brand/toyota/toyota.component';
import {KiaComponent} from '../catalog/brand/kia/kia.component';
import {HondaComponent} from '../catalog/brand/honda/honda.component';
import {C1Component} from '../catalog/capacity/c1/c1.component';
import {C2Component} from '../catalog/capacity/c2/c2.component';
import {C3Component} from '../catalog/capacity/c3/c3.component';
import {Pr1Component} from '../catalog/price/pr1/pr1.component';
import {Pr2Component} from '../catalog/price/pr2/pr2.component';
import {Pr3Component} from '../catalog/price/pr3/pr3.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent,
    children: [
      {path: 'registrar', component: RegistrarComponent},
      {path: 'category', component: CategoryComponent,
      children: [
        {path: 'tractores', component: TractoresComponent},
        {path: 'bobcats', component: BobcatsComponent},
        {path: 'excavadoras', component: ExcavadorasComponent},
        {path: 'llantas', component: LlantasComponent}
      ]
      },
      {path: 'model', component: ModelComponent,
        children: [
          {path: 'm1', component: M1Component},
          {path: 'm2', component: M2Component},
          {path: 'm3', component: M3Component}
        ]
      },
      {path: 'brand', component: BrandComponent,
        children: [
          {path: 'toyota', component: ToyotaComponent},
          {path: 'kia', component: KiaComponent},
          {path: 'honda', component: HondaComponent}
        ]
      },
      {path: 'capacity', component: CapacityComponent,
        children: [
          {path: 'c1', component: C1Component},
          {path: 'c2', component: C2Component},
          {path: 'c3', component: C3Component}
        ]},
      {path: 'price', component: PriceComponent,
        children: [
          {path: 'pr1', component: Pr1Component},
          {path: 'pr2', component: Pr2Component},
          {path: 'pr3', component: Pr3Component}
        ]}
    ]},
  {path: 'contactus', component: ContactComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
