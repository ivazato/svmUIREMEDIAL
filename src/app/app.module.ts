import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CatalogComponent} from './catalog/catalog.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {baseURL} from './shared/baseurl';
import { ConfigComponent } from './config/config.component';
import { CapacityComponent } from './catalog/capacity/capacity.component';
import { ModelComponent } from './model/model.component';
import { PriceComponent } from './catalog//price/price.component';
import { CategoryComponent } from './catalog/category/category.component';
import { TractoresComponent } from './catalog/category/tractores/tractores.component';
import { BobcatsComponent } from './catalog/category/bobcats/bobcats.component';
import { ExcavadorasComponent } from './catalog/category/excavadoras/excavadoras.component';
import { LlantasComponent } from './catalog/category/llantas/llantas.component';
import { BrandComponent } from './catalog/brand/brand.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { M1Component } from './model/m1/m1.component';
import { M2Component } from './model/m2/m2.component';
import { M3Component } from './model/m3/m3.component';
import { ToyotaComponent } from './catalog/brand/toyota/toyota.component';
import { KiaComponent } from './catalog/brand/kia/kia.component';
import { HondaComponent } from './catalog/brand/honda/honda.component';
import { C1Component } from './catalog/capacity/c1/c1.component';
import { C2Component } from './catalog/capacity/c2/c2.component';
import { C3Component } from './catalog/capacity/c3/c3.component';
import { Pr1Component } from './catalog/price/pr1/pr1.component';
import { Pr2Component } from './catalog/price/pr2/pr2.component';
import { Pr3Component } from './catalog/price/pr3/pr3.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ItemDetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    ConfigComponent,
    CapacityComponent,
    ModelComponent,
    PriceComponent,
    CategoryComponent,
    TractoresComponent,
    BobcatsComponent,
    ExcavadorasComponent,
    LlantasComponent,
    BrandComponent,
    RegistrarComponent,
    M1Component,
    M2Component,
    M3Component,
    ToyotaComponent,
    KiaComponent,
    HondaComponent,
    C1Component,
    C2Component,
    C3Component,
    Pr1Component,
    Pr2Component,
    Pr3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule,
    FlexLayoutModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule

  ],
  providers: [
    {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ]

})
export class AppModule {
}
