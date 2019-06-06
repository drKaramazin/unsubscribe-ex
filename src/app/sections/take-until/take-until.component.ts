import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UtilService } from '../../services/util/util.service';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit, OnDestroy {

  counter: Observable<number>;

  count: number;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private util: UtilService,
  ) { }

  ngOnInit() {
    this.counter = this.util.createObservable();

    this.counter.pipe(takeUntil(this.unsubscribe))
      .subscribe(
        value => this.count = value,
        error => console.error(error),
        () => console.log('[takeUntil] complete'),
      );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
