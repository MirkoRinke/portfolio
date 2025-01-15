import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  objectKeys(obj: any) {
    return Object.keys(obj);
  }

  getNumbersFromEnd(inputString: string): number {
    const match = inputString.match(/(\d+)$/);
    return match ? parseInt(match[0], 10) : NaN;
  }
}
