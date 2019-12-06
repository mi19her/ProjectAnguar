import { Component } from '@angular/core';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk';

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
  client = null;
  stitchClient = null;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.client = Stitch.initializeDefaultAppClient('battleship-tixkw');
    this.client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
      const db = this.client.service('mongodb', 'mongodb-atlas').db('jugador');
      db.collection('jugador').updateOne({ owner_id: this.client.auth.user.id }, { $set: { number: 42 } }, { upsert: true }).then(() =>
      db.collection('jugador').find({ owner_id: this.client.auth.user.id }, { limit: 100 }).asArray()).then(docs => {
        console.log("Found docs", docs)
        console.log("[MongoDB Stitch] Connected to Stitch")
      });
    }).catch(err => {
      console.error(err)
    });
  }

  changeTitle() {
    this.title = 'cambio de titulo';
  }
  addband() {
    this.band.push(this.namerock);
    this.namerock = '';
  }
}
