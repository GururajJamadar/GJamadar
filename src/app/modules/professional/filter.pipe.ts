import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 transform(value: any, searchText: string,prop:string): any {
  	// console.log("wwwwwwwwwww",value)
  	// console.log("searchText",searchText)
  	// console.log("prop",prop)
    if(value.length === 0 || searchText === ''){
    	return value;
    }
     
     let result = []
      for(const item of value){
      	// console.log("wwwwwwwwwww",item)
      	if(item[prop].includes(searchText)){
      		result.push(item);
      	}
      	if(item['client_number'].includes(searchText)){
      		result.push(item);
      	}
      	if(item['date_of_booking'].includes(searchText)){
      		result.push(item);
      	}
      }
console.log("result array is",result);
var unique = result.filter(function(item, i, ar){
console.log("mmmmmmmmmm",item);
console.log("22222222",i);
console.log("33333333",ar);
 return ar.indexOf(item) === i; });
// console.log("testttt",unique);
      return unique;

  }


}
