import { Component } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lat: number;
  lon: number;
  total: string;
  constructor(
    //public navCtrl: NavController,
    public geolocation: Geolocation) {
    //  this.getGeolocation()
  }
  ngAfterViewInit() {
    this.geolocationNative();
  }
  //geolocationNative() {
    //throw new Error('Method not implemented.');

    geolocationNative(){
      this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
        console.log(geoposition)
        this.lat = geoposition.coords.latitude;
        this.lon = geoposition.coords.longitude;
    })
  }
}
