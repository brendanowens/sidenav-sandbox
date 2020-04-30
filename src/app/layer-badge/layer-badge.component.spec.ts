import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerBadgeComponent } from './layer-badge.component';

describe('LayerBadgeComponent', () => {
  let component: LayerBadgeComponent;
  let fixture: ComponentFixture<LayerBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
