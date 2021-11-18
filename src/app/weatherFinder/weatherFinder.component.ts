
import { HttpClient } from '@angular/common/http';
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
  cityData: any = null;
  url: string = "https://jsonmock.hackerrank.com/api/weather?name=";
  isSunny: boolean = false;

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    // console.log(this.weatherData);
  }


  search() {
    console.log("search");
    console.log(this.city);
    this.http.get(this.url + this.city).subscribe(
      (res: any) => {
        if (res.data.length > 0) {
          this.cityData = res.data[0];
          console.log(this.cityData.weather);
          console.log(parseFloat(this.cityData.weather));
          if (parseFloat(this.cityData.weather)>=20) {
            this.isSunny =  true;
          }
          else {
            this.isSunny =  false;
          }
        }
        else {
          this.cityData = null;
        }
        
        console.log(this.cityData);
      }
    )
    // HttpClient.
    // this.cityData = <data>this.weatherData.find(function(obj) {
    //   return (obj.name.toLowerCase() === value.toLowerCase());
    // });
    // console.log(this.cityData);
    
    // this.city = value;
  }
}
