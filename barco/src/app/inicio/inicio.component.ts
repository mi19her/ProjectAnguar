import { Component, OnInit } from '@angular/core';
// import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const client = Stitch.initializeDefaultAppClient('battleship-tixkw');
    // const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('jugador');
    // const collection = db.collection("jugador");
   
   
    // const newItem = {
    //   "name": "Plastic Bricks",
    //   "quantity": 10,
    //   "category": "toys",
    //   "reviews": [{ "username": "legolover", "comment": "These are awesome!" }]
    // };
    
    // collection.insertOne(newItem)
    //   .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
    //   .catch(err => console.error(`Failed to insert item: ${err}`))
    //    console.log(newItem);
  }
  
}
