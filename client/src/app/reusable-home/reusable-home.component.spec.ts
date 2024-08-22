import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableHomeComponent } from './reusable-home.component';

describe('ReusableHomeComponent', () => {
  let component: ReusableHomeComponent;
  let fixture: ComponentFixture<ReusableHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
