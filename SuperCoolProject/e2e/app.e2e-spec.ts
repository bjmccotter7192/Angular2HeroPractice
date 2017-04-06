import { SuperCoolProjectPage } from './app.po';

describe('super-cool-project App', function() {
  let page: SuperCoolProjectPage;

  beforeEach(() => {
    page = new SuperCoolProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
