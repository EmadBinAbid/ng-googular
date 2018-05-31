import { Component, OnInit, ViewChild } from '@angular/core';
import {  } from  '@types/googlemaps';

@Component({
  selector: 'ga-track-agents',
  templateUrl: './track-agents.component.html',
  styleUrls: ['./track-agents.component.scss']
})
export class TrackAgentsComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    var mapInit = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapInit);

  }

}
