import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private users = 'pidor';
  constructor() {}
  public getAll() {
    return this.users;
  }
}
