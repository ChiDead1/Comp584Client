import { ComponentFixture, TestBed } from '@angular/core/testing';

import { saveNovelReadComponent } from './saveNovelRead.component';

describe('saveNovelReadComponent', () => {
  let component: saveNovelReadComponent;
  let fixture: ComponentFixture<saveNovelReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ saveNovelReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(saveNovelReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
