import { SchemaDetailsPropertiesComponent } from './schema-details-properties/schema-details-properties.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataModelDomainsComponent } from './data-model-domains/data-model-domains.component';
import { EntitiesComponent } from './entities/entities.component';
import { ClassesComponent } from './classes/classes.component';
import { PropertiesComponent } from './properties/properties.component';
import { SchemaDetailsTypesComponent } from './schema-details-types/schema-details-types.component';
import { DomainsComponent } from './domains/domains.component';
import { DataDescriptorsComponent } from './data-descriptors/data-descriptors.component';
import { DescriptorDetailsComponent } from './descriptor-details/descriptor-details.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':id',
    component: RoutingComponent
  },
  {
    path: 'data-models/list',
    component: DataModelDomainsComponent
  },
  {
    path: 'domain/:domain_name',
    component: DomainsComponent
  },
  {
    path: 'entities/list',
    component: EntitiesComponent
  },
  {
    path: 'types/list',
    component: ClassesComponent
  },
  // {
  //   path: 'type/:class_name',
  //   component: SchemaDetailsTypesComponent
  // },
  {
    path: 'properties/list',
    component: PropertiesComponent
  },
  // {
  //   path: 'properties/:property_name',
  //   component: SchemaDetailsPropertiesComponent
  // },
  {
    path: 'data-descriptors/list',
    component: DataDescriptorsComponent
  },
  {
    path: 'data-descriptors/:descriptor_name',
    component: DescriptorDetailsComponent
  },
  {
    path: 'search/searchTerm',
    component: SearchResultComponent
  },
  {
    path: '404/not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
