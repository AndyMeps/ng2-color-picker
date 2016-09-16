import { Ng2ColorPickerDemoPage } from './app.po';

describe('ng2-color-picker-demo App', function() {
  let page: Ng2ColorPickerDemoPage;

  beforeEach(() => {
    page = new Ng2ColorPickerDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
