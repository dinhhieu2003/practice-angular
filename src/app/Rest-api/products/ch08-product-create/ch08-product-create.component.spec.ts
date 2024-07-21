import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch08ProductCreateComponent } from './ch08-product-create.component';

describe('Ch08ProductCreateComponent', () => {
  let component: Ch08ProductCreateComponent;
  let fixture: ComponentFixture<Ch08ProductCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ch08ProductCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ch08ProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
