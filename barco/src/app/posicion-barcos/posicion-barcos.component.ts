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
  aa=[];



  constructor() { }

  ngOnInit() {
  }

  getPositionsBots(a, b) {
    const arrBots = [];
 
    let stringBots=a+b;
    const newArray=[];

      arrBots.push(stringBots);
    if(stringBots !=0){
      // console.log(arrBots);
      this.aa.push(stringBots);
      }     
    console.log(this.aa);
    return this.aa;
  }

}
