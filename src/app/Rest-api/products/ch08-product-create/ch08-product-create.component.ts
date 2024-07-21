import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-ch08-product-create',
  standalone: true,
  imports: [],
  templateUrl: './ch08-product-create.component.html',
  styleUrl: './ch08-product-create.component.scss'
})
export class Ch08ProductCreateComponent {
  @Output() added = new EventEmitter<Product>();

  constructor(private productService: ProductService) {}

  createProduct(name: string, price: number) {
    this.productService.addProduct(name, price).subscribe(product => {
      this.added.emit(product);
    });
  }

}
