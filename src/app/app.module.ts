import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialsAddComponent } from './components/tutorials-add/tutorials-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TutorialsDetailsComponent } from './components/tutorials-details/tutorials-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsListComponent,
    TutorialsAddComponent,
    TutorialsDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
