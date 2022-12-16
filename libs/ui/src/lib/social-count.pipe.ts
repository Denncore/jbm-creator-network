import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'socialCount'
})
export class SocialCountPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 1000 ) {
      const dividedValue = this.divideAndRound(value, 1000);
      if (dividedValue >= 1000) {
        return (this.transformNumber(this.divideAndRound(dividedValue, 1000)) + ' mil.');
      }

      return (this.transformNumber(dividedValue) + ' tsd.');
    }
    
    return value + '';
  }


  private transformNumber(value: number) {
    return (value + '').replace('.', ',');
  }

  private divideAndRound(value: number, divider: number) {
    return Math.round((value / divider) * 10) / 10;
  }
}
