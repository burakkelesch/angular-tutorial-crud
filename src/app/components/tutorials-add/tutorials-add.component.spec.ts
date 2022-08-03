import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsAddComponent } from './tutorials-add.component';

describe('TutorialsAddComponent', () => {
  let component: TutorialsAddComponent;
  let fixture: ComponentFixture<TutorialsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
