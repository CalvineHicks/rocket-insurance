import { useState } from 'react';
import './quote-feature.module.scss';
import DisplayQuote from './ui/display-quote-ui/display-quote-ui';
import GetQuoteInfo from './ui/get-quote-info-ui/get-quote-info-ui';
import { QuoteInfo } from './util/quote-models';

export function QuoteFeature() {
  const [quoteInfo, setQuoteInfo] = useState<QuoteInfo>();

  return (
    <div>
      {quoteInfo ? 
      <DisplayQuote quoteInfo={quoteInfo}/> :
      <GetQuoteInfo setQuoteInfo={setQuoteInfo}/>
      }
    </div>
  );
}

export default QuoteFeature;
