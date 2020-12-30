import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {
  experience : any ; 
  joinYear : any ;
  currentYear : any ;
  transform(value: any): any{
      this.joinYear = new Date(value).getFullYear();
      this.currentYear = new Date().getFullYear();
      this.experience = this.currentYear - this.joinYear ;
      return this.experience ;
  }

}
