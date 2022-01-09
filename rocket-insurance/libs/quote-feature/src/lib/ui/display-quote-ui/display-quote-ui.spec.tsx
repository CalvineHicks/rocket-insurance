import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { mockPostQuote, mockPostQuoteResponse, mockPutQuoteResponse } from '../../util/test-fixtures';
import axios from "axios";
import DisplayQuote from './display-quote-ui';
import { baseQuoteUrl } from '../../config/quote-config';

jest.mock('axios');

describe('DisplayQuote', () => {
  beforeEach(() => {
    axios.post = jest.fn().mockResolvedValue({ data: { ...mockPostQuoteResponse } });
    axios.put = jest.fn().mockResolvedValue({ data: { ...mockPutQuoteResponse } })
  })
  afterEach(() => {
    jest.resetAllMocks();
  })

  it('should dispatch axios post request upon creation', async () => {
    const { findByText, getByText } = render(<DisplayQuote quoteInfo={mockPostQuote} />);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(baseQuoteUrl, { ...mockPostQuote });
    expect(getByText(/loading.../i)).toBeTruthy()

    const header = await findByText(/your coverage information/i);
    expect(header).toBeTruthy()
  })

  it('should populate form with state data', async () => {
    const { getByLabelText, getByRole, findByText } = render(<DisplayQuote quoteInfo={mockPostQuote} />);
    
    const premium = await findByText('6000');
    getByLabelText(/deductible:/i);
    getByLabelText(/asteroid collision:/i)
    getByRole('submit');
    expect(axios.post).toHaveBeenCalledTimes(1);
  })

  it('should update premium when limits are adjusted', async () => {
    const { getByLabelText, getByRole, findByText } = render(<DisplayQuote quoteInfo={mockPostQuote} />);
    
    let premium = await findByText('6000');
    const deductible = getByLabelText(/deductible:/i);
    const asteroidCollision = getByLabelText(/asteroid collision:/i)
    const submitButton = getByRole('submit');

    userEvent.selectOptions(deductible, '1000');
    userEvent.selectOptions(asteroidCollision, '500000');
    userEvent.click(submitButton);
    premium = await findByText('8939.38');

    expect(premium).toBeTruthy();
    expect(axios.put).toHaveBeenCalledTimes(1);
  })

});


