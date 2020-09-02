import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataModelDomainsComponent} from './data-model-domains/data-model-domains.component'
import { EntitiesComponent } from './entities/entities.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
