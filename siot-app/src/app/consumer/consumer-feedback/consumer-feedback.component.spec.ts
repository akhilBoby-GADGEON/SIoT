import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerFeedbackComponent } from './consumer-feedback.component';

describe('ConsumerFeedbackComponent', () => {
  let component: ConsumerFeedbackComponent;
  let fixture: ComponentFixture<ConsumerFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
