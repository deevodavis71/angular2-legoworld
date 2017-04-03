import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  
  title = 'Lego World';

  constructor () {
    console.log ('Constructed the APIService');
  }
}
