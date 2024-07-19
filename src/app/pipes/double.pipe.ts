import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'double',
  standalone: true
})
export class DoublePipe implements PipeTransform {

  transform(value: Product): unknown {
    return value.price * 2;
  }

}
