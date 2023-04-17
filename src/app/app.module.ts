import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { getAnalytics } from "firebase/analytics";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
//import { initializeApp } from 'firebase/app';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCGQ0tYppWFJkuSxBhOpkH0xVDmX245Vdc",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "637908496727",
  appId: "2:637908496727:web:a4284b4c99e329d5",
  measurementId: "G-9VP01NDSXJ"
};
// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    
   // provideFirebaseApp(() => initializeApp({ ... }))
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
