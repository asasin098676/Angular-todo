import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly PREFIX = 'TODO';

  public set(key: string, value: any): void {
    localStorage.setItem(`${this.PREFIX}${key}`, JSON.stringify(value));
  }

  public get(key: string): any {
    return JSON.parse(localStorage.getItem(`${this.PREFIX}${key}`));
  }
}
