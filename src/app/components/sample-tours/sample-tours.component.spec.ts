import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleToursComponent } from './sample-tours.component';

describe('SampleToursComponent', () => {
  let component: SampleToursComponent;
  let fixture: ComponentFixture<SampleToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleToursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
