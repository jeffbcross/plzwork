import {Component} from 'angular2/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs';

@Component({
  selector: 'people',
  templateUrl: 'app///people/people.html',
  styleUrls: ['app///people/people.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class People {
  people:Observable<any[]>;
  constructor(af:AngularFire) {
    this.people = af.list('/people');
  }
}