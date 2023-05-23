import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDispatcherComponent } from './add-dispatcher.component';

describe('AddDispatcherComponent', () => {
  let component: AddDispatcherComponent;
  let fixture: ComponentFixture<AddDispatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDispatcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
