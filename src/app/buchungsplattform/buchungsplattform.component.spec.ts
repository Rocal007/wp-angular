import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungsplattformComponent } from './buchungsplattform.component';

describe('BuchungsplattformComponent', () => {
  let component: BuchungsplattformComponent;
  let fixture: ComponentFixture<BuchungsplattformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchungsplattformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungsplattformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
