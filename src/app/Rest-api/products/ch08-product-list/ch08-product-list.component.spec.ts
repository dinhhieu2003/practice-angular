import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch08ProductListComponent } from './ch08-product-list.component';

describe('Ch08ProductListComponent', () => {
  let component: Ch08ProductListComponent;
  let fixture: ComponentFixture<Ch08ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ch08ProductListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ch08ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
