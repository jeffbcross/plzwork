import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {PlzworkApp} from '../app/plzwork';

beforeEachProviders(() => [PlzworkApp]);

describe('App: Plzwork', () => {
  it('should have the `defaultMeaning` as 42', inject([PlzworkApp], (app: PlzworkApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([PlzworkApp], (app: PlzworkApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

