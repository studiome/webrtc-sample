import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidoeviewComponent } from './vidoeview.component';

describe('VidoeviewComponent', () => {
  let component: VidoeviewComponent;
  let fixture: ComponentFixture<VidoeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidoeviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidoeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
