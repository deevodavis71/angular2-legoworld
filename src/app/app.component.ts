import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;

  constructor(private api: ApiService,
              private titleService: Title) {
    this.title = this.api.title;
    this.titleService.setTitle (this.title);
  }
}
