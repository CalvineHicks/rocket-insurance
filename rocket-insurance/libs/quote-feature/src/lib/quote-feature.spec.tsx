import { render } from '@testing-library/react';

import QuoteFeature from './quote-feature';

describe('QuoteFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuoteFeature />);
    expect(baseElement).toBeTruthy();
  });
});
