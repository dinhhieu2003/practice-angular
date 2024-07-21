import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Ch08SortPipe } from '../pipes/ch08-sort.pipe';
import { Ch08ProductDetailComponent } from "../ch08-product-detail/ch08-product-detail.component";
import { Ch08ProductCreateComponent } from "../ch08-product-create/ch08-product-create.component";

@Component({
  selector: 'app-ch08-product-list',
  standalone: true,
  imports: [Ch08SortPipe, Ch08ProductDetailComponent, Ch08ProductCreateComponent],
  templateUrl: './ch08-product-list.component.html',
  styleUrl: './ch08-product-list.component.scss'
})
export class Ch08ProductListComponent {
  selectedProduct: Product | undefined;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  onAdd(product: Product) {
    this.products.push(product);
  }

  onDelete() {
    this.products = this.products.filter(product => product !== this.selectedProduct);
    this.selectedProduct = undefined;
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
