import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  public forecasts:Weatherforecast[] =[];
  baseurl = "https://localhost:7276/WeatherForecast";
  constructor(http: HttpClient) {
      http.get<Weatherforecast[]>(this.baseurl+'weatherforecast').subscribe(result=>
      this.forecasts = result);
   }error = console.error();



}
interface Weatherforecast{
  data: string
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
