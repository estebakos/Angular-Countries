import { PaisesPage } from './app.po';

describe('paises App', function() {
  let page: PaisesPage;

  beforeEach(() => {
    page = new PaisesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
