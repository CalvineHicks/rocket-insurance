import { render } from '@testing-library/react';

import QuoteFeature from './quote-feature';

xdescribe('QuoteFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuoteFeature />);
    expect(baseElement).toBeTruthy();
  });
});
