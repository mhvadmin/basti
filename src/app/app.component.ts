import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'mhv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _resizeFn(e) {
    const windHeight: number = e ? e.target.innerHeight : this._initWinHeight;
    this.minHeight = `{windHeight}px`;
  }
  navOpen: boolean;
  minHeight: string;
  private _initWinHeight = 0;

  constructor(private auth:AuthService) { 
    auth.handleAuth();
  }

  ngOnInit() {
    
    fromEvent(window, 'resize').pipe(
      debounceTime(200)
    ).subscribe(event => this._resizeFn(event));

    this._initWinHeight = window.innerHeight;
    this._resizeFn(null);
  }

  navToggledHandler(e: boolean) {
    this.navOpen = e;
  }
}
