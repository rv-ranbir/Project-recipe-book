import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCzqB9PXskXuf_MIwaAvFFv6hLj0gGz4Wo",
      authDomain: "recipe-book-3994c.firebaseapp.com"
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

}
