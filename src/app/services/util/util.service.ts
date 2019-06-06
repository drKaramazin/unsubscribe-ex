import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  createObservable(): Observable<number> {
    return new Observable<number>(observer => {
      console.log('Subscribed');

      let index = -1;
      const interval = setInterval(() => {
        index++;
        console.log(`next: ${index}`);
        observer.next(index);
      }, 1000);

      return () => {
        console.log('Teardown');
        clearInterval(interval);
      };
    });
  }

}
