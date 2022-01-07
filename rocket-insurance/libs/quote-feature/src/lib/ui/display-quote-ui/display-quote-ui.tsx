import { useEffect } from 'react';
import { QuoteInfo } from '../../util/quote-models';
import './display-quote-ui.module.scss';

/* eslint-disable-next-line */
export interface DisplayQuoteProps {
  quoteInfo: QuoteInfo
}

export function DisplayQuote({quoteInfo}: DisplayQuoteProps) {
  useEffect(() => {
    // fetch()
  }, [])
  return (
    <div>
      <h1>Welcome to DisplayQuote!</h1>
    </div>
  );
}

export default DisplayQuote;
