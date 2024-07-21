import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'ch08Sort',
  standalone: true
})
export class Ch08SortPipe implements PipeTransform {

  transform(value: Product[]): Product[] {
    if(value) {
      return value.sort((a: Product, b:Product) => {
        if(a.name < b.name) {
          return -1;
        } else if(b.name < a.name) {
          return 1;
        }
        return 0;
      })
    }
    return [];
  }

}
