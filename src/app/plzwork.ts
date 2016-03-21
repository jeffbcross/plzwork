import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AngularFire} from 'angularfire2';
import {People} from './people/people';

@Component({
  selector: 'plzwork-app',
  providers: [],
  templateUrl: 'app/plzwork.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {
    path: '/',
    component: People
  }
])
export class PlzworkApp {
  constructor(public af:AngularFire) {}
}
