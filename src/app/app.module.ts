import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddTextComponent } from './add-text/add-text.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { HeroesComponent } from './heroes/heroes.component';

const appRoutes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'add', component: AddTextComponent },
];

@NgModule({
  declarations: [AppComponent, RegistrationComponent, AddTextComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
