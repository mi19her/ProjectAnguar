import { Component, OnInit } from '@angular/core';
// import { Stitch, RemoteMongoClient, AnonymousCredential} from 'mongodb-stitch-browser-sdk';
import { StitchService } from './stitch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private stitchService:StitchService){}
  
  
  ngOnInit(): void {
    
    console.log(this.stitchService) 
     console.log(this.stitchService.client.db('jugador'))
  // const client = Stitch.initializeDefaultAppClient('battleship-tixkw');
  // const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('jugador');

  // client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
  // db.collection('jugador').updateOne({owner_id: client.auth.user.id}, {$set: {number: 42}}, {upsert: true})
  // ).then(() =>
  // db.collection('jugador').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
  // ).then(docs => {
  //   console.log('Found docs', docs);
  //   console.log('[MongoDB Stitch] Connected to Stitch');
  // }).catch(err => {
  //   console.error(err);
  // });
}
}



