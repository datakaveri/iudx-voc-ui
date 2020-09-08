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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'data-models',
    component: DataModelDomainsComponent,
  },
  {
    path: 'domain/:domain_name',
    component: DomainsComponent,
  },
  {
    path: 'class/:class_name',
    component: SchemaDetailsTypesComponent,
  },
  {
    path: 'entities',
    component: EntitiesComponent,
  },
  {
    path: 'types',
    component: ClassesComponent,
  },
  {
    path: 'type/:class_name',
    component: SchemaDetailsTypesComponent,
  },
  {
    path: 'properties',
    component: PropertiesComponent,
  },
  {
    path: 'properties/:property_name',
    component: SchemaDetailsPropertiesComponent,
  },
  {
    path: 'data-descriptors',
    component: DataDescriptorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
