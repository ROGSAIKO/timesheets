import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedDataComponent } from './declined-data.component';

describe('DeclinedDataComponent', () => {
  let component: DeclinedDataComponent;
  let fixture: ComponentFixture<DeclinedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclinedDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeclinedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
