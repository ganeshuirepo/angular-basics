import { SearchPipe } from './search-pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchPipe'})

export class SearchdataPipe implements PipeTransform {
  transform (value: any, searchText: string): any {
    if (searchText == null) { return value; }
    return value.filter(function(searchValue){
      return searchValue.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })

  }

}
