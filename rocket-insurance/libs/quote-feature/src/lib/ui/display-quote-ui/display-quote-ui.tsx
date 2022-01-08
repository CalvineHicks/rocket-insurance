import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { baseQuoteUrl } from '../../../../../config/quote-config';
import { Quote, QuoteInfo } from '../../util/quote-models';
import './display-quote-ui.module.scss';

/* eslint-disable-next-line */
export interface DisplayQuoteProps {
  quoteInfo: QuoteInfo
}

export function DisplayQuote({ quoteInfo }: DisplayQuoteProps) {
  const [quote, setQuote] = useState<Quote>()
  const [loaded, setLoaded] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axios.post(baseQuoteUrl, { ...quoteInfo })
      .then((response) => {
        setQuote(response.data.quote);
        console.log(response.data.quote);
      })
      .catch((e) => {
        console.log('error thrown: ', e);
      })
      .finally(() => {
        setLoaded(true);
      })
  }, [])

  const onSubmit = (data: { deductible: string, asteroid_collision: string }) => {
    axios.put(baseQuoteUrl + `/${quote?.quoteId}`,
      {
        quote: {
          quoteId: quote?.quoteId,
          rating_address: quote?.rating_address,
          policy_holder: quote?.policy_holder,
          variable_selections: { 
            deductible: parseInt(data.deductible),
            asteroid_collision: parseInt(data.asteroid_collision)
           }
        }
      })
      .then((response) => {
        setQuote(response.data.quote);
      })
      .catch((e) => {
        console.log('error thrown: ', e);
      })
  }



  return (
    <div className='display-quote'>
      <h1>Your Coverage Information</h1>
      {loaded ?
        (<div>
          <div className='premium'>
            <div className='premium-label'>Annual Premium:</div>
            <div className='premium-value'>{quote?.premium}</div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Deductible:
              <select {...register('deductible')} defaultValue={quote?.variable_selections.deductible}>
                {quote?.variable_options.deductible.values
                  .map(value =>
                    <option value={value} key={value}>{value}</option>
                  )}
              </select>
            </label>
            <label>
              Asteroid Collision:
              <select {...register('asteroid_collision')} defaultValue={quote?.variable_selections.asteroid_collision}>
                {quote?.variable_options.asteroid_collision.values
                  .map(value =>
                    <option value={value} key={value}>{value}</option>
                  )}
              </select>
            </label>
            <button>Update Coverage Limits</button>
          </form>
        </div>
        ) : (
          <div>
            loading...
          </div>)}
    </div>
  );
}

export default DisplayQuote;
