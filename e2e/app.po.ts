export class PlzworkPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('plzwork-app p')).getText();
  }
}
