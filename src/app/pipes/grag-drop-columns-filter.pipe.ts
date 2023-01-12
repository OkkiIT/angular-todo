import {Pipe, PipeTransform} from '@angular/core';
import {Column} from "../models/columns";

@Pipe({
  name: 'dragDropColumnsFilter'
})
export class DragDropColumnsFilterPipe implements PipeTransform {

  transform(columnsArray: Column[], key: string): string[] {
    return columnsArray.map(item => item.key).filter(item => item !== key)
  }

}
