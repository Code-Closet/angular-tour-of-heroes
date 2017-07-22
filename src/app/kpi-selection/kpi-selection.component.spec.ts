import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiSelectionComponent } from './kpi-selection.component';

describe('KpiSelectionComponent', () => {
  let component: KpiSelectionComponent;
  let fixture: ComponentFixture<KpiSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
