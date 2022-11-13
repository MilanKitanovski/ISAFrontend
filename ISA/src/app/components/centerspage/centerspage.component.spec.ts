import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterspageComponent } from './centerspage.component';

describe('CenterspageComponent', () => {
  let component: CenterspageComponent;
  let fixture: ComponentFixture<CenterspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
