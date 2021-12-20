import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNotesPageComponent } from './shared-notes-page.component';

describe('SharedNotesPageComponent', () => {
  let component: SharedNotesPageComponent;
  let fixture: ComponentFixture<SharedNotesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedNotesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedNotesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
