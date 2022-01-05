import { render } from '@testing-library/react';

import DisplayQuoteUi from './display-quote-ui';

describe('DisplayQuoteUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DisplayQuoteUi />);
    expect(baseElement).toBeTruthy();
  });
});
