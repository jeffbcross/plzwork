import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AngularFire} from 'angularfire2';

@Component({
  selector: 'plzwork-app',
  providers: [],
  templateUrl: 'app/plzwork.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

])
export class PlzworkApp {
  constructor(public af:AngularFire) {}
}
