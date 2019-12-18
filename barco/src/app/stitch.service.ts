import { Injectable } from '@angular/core';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';


@Injectable({
  providedIn: 'root'
})

export class StitchService {
  app = null;
  client = null;

  constructor() {
   
    this.app = Stitch.initializeDefaultAppClient('battleship-tixkw');
    this.client = this.app.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');

  }
}
