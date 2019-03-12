import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-welcome h1')).getText();
  }

  getDirectButton() {
    return element(by.css('[ng-reflect-router-link="/directives"]'));
  }
}
