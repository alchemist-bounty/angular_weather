import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[] =[];
  city: string = '';
  cityData: data = <data>{};

  ngOnInit() {
    console.log(this.weatherData);
  }

  cityChange(value: string) {
    this.cityData = <data>this.weatherData.find(function(obj) {
      return (obj.name.toLowerCase() === value.toLowerCase());
    });
    console.log(this.cityData);
    
    this.city = value;
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}