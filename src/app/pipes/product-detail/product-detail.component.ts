import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnChanges{
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if(product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product change from old value ${oldValue} to new value ${newValue}`);

    }
  }
  buy() {
    this.bought.emit();
  }
}
