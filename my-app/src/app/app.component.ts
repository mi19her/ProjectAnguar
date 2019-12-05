import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mundo';
  name = 'milca';
  band = ['nirvana', 'los prisioneros', 'panda'];
  namerock = '';

  changeTitle() {
    this.title = 'cambio de titulo';
  }
  addband() {
    this.band.push(this.namerock);
    this.namerock = '';
  }
}
