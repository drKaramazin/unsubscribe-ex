import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { UtilService } from '../../services/util/util.service';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss']
})
export class TakeWhileComponent implements OnInit, OnDestroy {

  counter: Observable<number>;

  count: number;

  private alive = true;

  constructor(
    private util: UtilService,
  ) { }

  ngOnInit() {
    this.counter = this.util.createObservable();

    this.counter.pipe(takeWhile(() => this.alive))
      .subscribe(
        value => this.count = value,
        error => console.error(error),
        () => console.log('[takeWhile] complete'),
      );
  }

  ngOnDestroy(): void {
    console.log('[takeWhile] ngOnDestroy');
    this.alive = false;
  }

}
