import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }
  isLogged(): Promise<boolean> {
    if (typeof (Storage) !== 'undefined') {
      if (sessionStorage.getItem('user')) {
        return Promise.resolve(true);
      }
    } return Promise.resolve(false);
  }
}
