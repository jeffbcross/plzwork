import { PlzworkPage } from './app.po';

describe('plzwork App', function() {
  let page: PlzworkPage;

  beforeEach(() => {
    page = new PlzworkPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('plzwork Works!');
  });
});
