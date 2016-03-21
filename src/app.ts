import {bootstrap} from 'angular2/platform/browser';
import {PlzworkApp} from './app/plzwork';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {
  FIREBASE_PROVIDERS,
  defaultFirebase,
  firebaseAuthConfig,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

bootstrap(PlzworkApp, [
  ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase('https://plzwork.firebaseio.com'),
  firebaseAuthConfig({
    method: AuthMethods.Popup,
    provider: AuthProviders.Github
  })
]);
