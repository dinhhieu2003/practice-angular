import { Component, effect, viewChild } from '@angular/core';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { Product } from '../product';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  selectedProduct: Product | undefined;
  productDetail = viewChild.required<ProductDetailComponent>('detail');
  products: Product[] = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name:  'Microphone',
      price: 200
    },
    {
      name: 'Wireless keyboard',
      price: 85
    }
  ];

  constructor() {
    effect(() => {
      console.log(`Product: ${this.productDetail().product?.name}`);
    })
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

}
