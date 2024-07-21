import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch08ProductDetailComponent } from './ch08-product-detail.component';

describe('Ch08ProductDetailComponent', () => {
  let component: Ch08ProductDetailComponent;
  let fixture: ComponentFixture<Ch08ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ch08ProductDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ch08ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
