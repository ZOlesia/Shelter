import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service'; //register service
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { ShowPetComponent } from './show-pet/show-pet.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPetsComponent,
    NewPetComponent,
    ShowPetComponent,
    UpdatePetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //to fetch the data???
    FormsModule, AppRoutingModule // <-- register FormsModule with our app.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
