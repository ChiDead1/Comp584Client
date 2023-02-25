import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  public forecasts:WeatherForecast[] =[];
  baseurl = "https://localhost:7276/NovelLibary";
  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>(this.baseurl).subscribe(result=>
    this.forecasts = result);
   }error = console.error();

}
interface WeatherForecast {
  date: string;
  temperatureC: number;
  summary: string;
}

