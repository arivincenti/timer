import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleNumber'
})
export class DoubleNumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value <= 9){
      return `0${value}`;
    }

    return value.toString();

  }

}
