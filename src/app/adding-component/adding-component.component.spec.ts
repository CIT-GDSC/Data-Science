import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingComponentComponent } from './adding-component.component';

describe('AddingComponentComponent', () => {
  let component: AddingComponentComponent;
  let fixture: ComponentFixture<AddingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
