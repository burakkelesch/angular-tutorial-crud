import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorialsAddComponent } from './components/tutorials-add/tutorials-add.component';
import { TutorialsDetailsComponent } from './components/tutorials-details/tutorials-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';


const routes: Routes = [
{path:'tutorials',component:TutorialsListComponent},
{path:'add',component:TutorialsAddComponent},
{path:'tutorials/:id',component:TutorialsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
