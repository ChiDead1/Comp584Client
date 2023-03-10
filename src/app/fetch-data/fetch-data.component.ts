import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  public easternNovel:easternNovelData[] =[];
  baseurl = "https://localhost:7276/api/EasternNovel";
  constructor(http: HttpClient) {
    http.get<easternNovelData[]>(this.baseurl).subscribe(result=>
    this.easternNovel = result);
   }error = console.error();

}
interface easternNovelData{
  sumName: string;
  chapters: number;
  summary: string;
}

