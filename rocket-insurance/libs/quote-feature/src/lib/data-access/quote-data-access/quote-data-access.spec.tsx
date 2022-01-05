import { render } from '@testing-library/react';

import QuoteDataAccess from './quote-data-access';

describe('QuoteDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuoteDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
