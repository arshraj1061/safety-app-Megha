import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app'
import firebaseConfig from './firebase';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from "@angular/fire/auth";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  modalCtrl: any;
  menu: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private afAuth:AngularFireAuth

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });    
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {}

  //async dismiss() {
   // await this.modalCtrl.dismiss();
  //}

  // dismiss(){
  //   this.menu.toggle();
  // }
  
  emm(){
    this.router.navigateByUrl("/emergency-contacts",{
      replaceUrl:true
    }).then((s) =>{
      this.dismiss();
    })
   }

   harass(){
    this.router.navigateByUrl("/harassment",{
      replaceUrl:true
    }).then((s) =>{
      this.dismiss();
    })
   }

   disaster(){
    this.router.navigateByUrl("/natural-disaster",{
      replaceUrl:true
    }).then((s) =>{
      this.dismiss();
    })
   }

   accident(){
    this.router.navigateByUrl("/accident",{
      replaceUrl:true
    }).then((s) =>{
      this.dismiss();
    })
   }

   fire(){
    this.router.navigateByUrl("/fire-incident",{
      replaceUrl:true
    }).then((s) =>{
      this.dismiss();
    })
   }

   async signout(){
    return this.afAuth.signOut().then(async ()=>{
      
      await this.router.navigateByUrl("/welcome",{
        replaceUrl:true
      })
      alert(`Signed out successfully`);
    })
   }

}
