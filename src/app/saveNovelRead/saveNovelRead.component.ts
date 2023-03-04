import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saveNovelRead',
  templateUrl: './saveNovelRead.component.html',
  styleUrls: ['./saveNovelRead.component.css']
})
export class saveNovelReadComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}