import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, limit?: number) {

        if (!value)
            return null;

            let actualLimit =(limit) ? limit : 50;
            return value.substr(0, actualLimit) +'...';

    }
}