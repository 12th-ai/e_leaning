import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotFOUNDComponent } from './pagenot-found.component';

describe('PagenotFOUNDComponent', () => {
  let component: PagenotFOUNDComponent;
  let fixture: ComponentFixture<PagenotFOUNDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagenotFOUNDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenotFOUNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
