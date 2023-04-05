import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

export interface EasternNovel {
  id: number;
  name: string;
  lat: number;
  lon: number;
}

@Component({
  selector: 'app-novel-libary',
  templateUrl: './novel-libary.component.html',
  styleUrls: ['./novel-libary.component.css']
})
export class NovelLibaryComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'lat', 'lon'];
  public EasternNovel2!: MatTableDataSource<EasternNovel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public EasternNovel: EasternNovel[] = [];
  baseurl = "https://localhost:7276/api/EasternNovelLibary";
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<EasternNovel[]>(this.baseurl).subscribe(result => {
      this.EasternNovel = result;
      this.EasternNovel2 = new MatTableDataSource<EasternNovel>(result);
      this.EasternNovel2.paginator = this.paginator;
    }, error => console.error(error));
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.EasternNovel.length) {
      endIndex = this.EasternNovel.length;
    }
    this.EasternNovel2.data = this.EasternNovel.slice(startIndex, endIndex);
  }
}
