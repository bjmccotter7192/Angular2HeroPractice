import { BankAppManagerPage } from './app.po';

describe('bank-app-manager App', function() {
  let page: BankAppManagerPage;

  beforeEach(() => {
    page = new BankAppManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
