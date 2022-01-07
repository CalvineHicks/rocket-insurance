import { render } from '@testing-library/react';

import GetQuoteInfo from './get-quote-info-ui';

describe('GetQuoteInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GetQuoteInfo />);
    expect(baseElement).toBeTruthy();
  });
});
