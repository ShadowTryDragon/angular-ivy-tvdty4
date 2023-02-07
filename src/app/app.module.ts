import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { HelloComponent } from './hello.component';



import { AppComponent } from './app.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowDataService } from './services/show-data.service';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent , HelloComponent, ShowListComponent, ShowFormComponent ],
  bootstrap: [ AppComponent],
  providers:    [ ShowDataService]
})
export class AppModule { }
