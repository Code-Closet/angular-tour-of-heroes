import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpitileComponent } from './kpitile.component';

describe('KpitileComponent', () => {
  let component: KpitileComponent;
  let fixture: ComponentFixture<KpitileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpitileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpitileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
