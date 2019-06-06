import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { UtilService } from '../../services/util/util.service';

@Component({
  selector: 'app-unsubsribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  counter: Observable<number>;
  subscription: Subscription;

  count: number;

  constructor(
    private util: UtilService,
  ) { }

  ngOnInit() {
    this.counter = this.util.createObservable();

    this.subscription = this.counter.subscribe(
      value => this.count = value,
      error => console.log(error),
      () => console.log('complete'),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
