import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavNoExpansionComponent } from './sidenav-no-expansion.component';

describe('SidenavNoExpansionComponent', () => {
  let component: SidenavNoExpansionComponent;
  let fixture: ComponentFixture<SidenavNoExpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavNoExpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavNoExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
