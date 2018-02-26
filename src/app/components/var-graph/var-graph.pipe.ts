import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'varGraph'
})
export class VarGraphPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
