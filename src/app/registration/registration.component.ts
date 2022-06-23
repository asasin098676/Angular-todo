import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTextComponent } from '../add-text/add-text.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public navigateToAdd(): void {
    this.router.navigate(['add'])
  }
}
