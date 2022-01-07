import { render } from '@testing-library/react';

import DisplayQuote from './display-quote-ui';

describe('DisplayQuote', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DisplayQuote />);
    expect(baseElement).toBeTruthy();
  });
});
