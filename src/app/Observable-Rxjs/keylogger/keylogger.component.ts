import { Component, effect, ElementRef, Input, OnInit, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { filter, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-keylogger',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './keylogger.component.html',
  styleUrl: './keylogger.component.scss'
})
export class KeyloggerComponent implements OnInit{
  @Input() numeric = false;
  // @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;
  input = viewChild<ElementRef>('keyContainer');
  keys = '';

  /**
   * Transforming observables
   */
  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(this.input()?.nativeElement, 'keyup');
    logger$.pipe(
      map(evt => evt.key.charCodeAt(0)),
      filter(code => {
        if (this.numeric) {
          return (code > 31 && (code < 48 || code > 57)) === false;
        }
        return true;
      }),
      tap(digit => this.keys += String.fromCharCode(digit))
    ).subscribe();
  }
}
