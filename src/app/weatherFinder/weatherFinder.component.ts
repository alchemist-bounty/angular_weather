
import {Component, OnInit} from '@angular/core';

interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

@Component({
  selector: 'weather-finder',
  templateUrl: './weatherFinder.component.html',
  styleUrls: ['./weatherFinder.component.scss']
})
export class WeatherFinder implements OnInit {

  city: string = '';
  cityData: any = {};

  ngOnInit() {
    // console.log(this.weatherData);
  }

  search() {
    // this.cityData = <data>this.weatherData.find(function(obj) {
    //   return (obj.name.toLowerCase() === value.toLowerCase());
    // });
    // console.log(this.cityData);
    
    // this.city = value;
  }
}
