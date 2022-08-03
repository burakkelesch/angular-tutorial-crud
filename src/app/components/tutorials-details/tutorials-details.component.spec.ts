import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsDetailsComponent } from './tutorials-details.component';

describe('TutorialsDetailsComponent', () => {
  let component: TutorialsDetailsComponent;
  let fixture: ComponentFixture<TutorialsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
