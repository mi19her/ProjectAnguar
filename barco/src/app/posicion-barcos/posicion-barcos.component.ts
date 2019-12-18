import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-posicion-barcos',
  templateUrl: './posicion-barcos.component.html',
  styleUrls: ['./posicion-barcos.component.css']
})
export class PosicionBarcosComponent implements OnInit {
  title = 'barco';
  table = [1, 2, 3, 4, 5, 6, 7];
  tableA = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  constructor() { }

  ngOnInit() {
  }

  getPositionsBots(a, b) {
    console.log(a, b);
  }

}
