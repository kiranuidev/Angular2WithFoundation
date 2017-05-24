import { FoundationAppPage } from './app.po';

describe('foundation-app App', () => {
  let page: FoundationAppPage;

  beforeEach(() => {
    page = new FoundationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
