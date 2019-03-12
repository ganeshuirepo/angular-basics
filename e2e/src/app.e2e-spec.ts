import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Angular Demo');
  });

  it('should display directive button', () => {
    page.navigateTo();
    expect(page.getDirectButton().getText()).toEqual('Directives Example')
  })
});
