import { render } from '@testing-library/react';

import GetQuoteInfoUi from './get-quote-info-ui';

describe('GetQuoteInfoUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GetQuoteInfoUi />);
    expect(baseElement).toBeTruthy();
  });
});
