import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {
  name: string | undefined;
  name$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 1000);
  });

  constructor() {
    this.name$.subscribe(this.setName);
  }

  /**
   * set must be property like below
   */
  private setName = () => {
    const timeStamp = new Date().getMilliseconds();
    this.name = `Learning Angular ${timeStamp}`;
  };

}
