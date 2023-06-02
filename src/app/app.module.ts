import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EntitiesComponent } from './entities/entities.component';
import { DataModelDomainsComponent } from './data-model-domains/data-model-domains.component';
import { SchemaDetailsTypesComponent } from './schema-details-types/schema-details-types.component';
import { ClassesComponent } from './classes/classes.component';
import { PropertiesComponent } from './properties/properties.component';
import { SchemaDetailsPropertiesComponent } from './schema-details-properties/schema-details-properties.component';
import { DomainsComponent } from './domains/domains.component';
import { DataDescriptorsComponent } from './data-descriptors/data-descriptors.component';
import { DescriptorDetailsComponent } from './descriptor-details/descriptor-details.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingComponent } from './routing/routing.component';
import { ToasterComponent } from './toaster/toaster.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonVisualizerModalComponent } from './json-visualizer-modal/json-visualizer-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    EntitiesComponent,
    DataModelDomainsComponent,
    SchemaDetailsTypesComponent,
    ClassesComponent,
    PropertiesComponent,
    SchemaDetailsPropertiesComponent,
    DomainsComponent,
    DataDescriptorsComponent,
    DescriptorDetailsComponent,
    SearchResultComponent,
    PageNotFoundComponent,
    RoutingComponent,
    ToasterComponent,
    JsonVisualizerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
