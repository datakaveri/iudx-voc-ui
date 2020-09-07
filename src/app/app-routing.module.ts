import { SchemaDetailsPropertiesComponent } from './schema-details-properties/schema-details-properties.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataModelDomainsComponent } from './data-model-domains/data-model-domains.component';
import { EntitiesComponent } from './entities/entities.component';
import { ClassesComponent } from './classes/classes.component';
import { PropertiesComponent } from './properties/properties.component';
import { SchemaDetailsTypesComponent } from './schema-details-types/schema-details-types.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'datamodels',
    component: DataModelDomainsComponent,
  },
  {
    path: 'entities',
    component: EntitiesComponent,
  },
  {
    path: 'classes',
    component: ClassesComponent,
  },
  {
    path: 'properties',
    component: PropertiesComponent,
  },
  {
    path: 'schema-details-types',
    component: SchemaDetailsTypesComponent,
  },
  {
    path: 'schema-details-properties',
    component: SchemaDetailsPropertiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
