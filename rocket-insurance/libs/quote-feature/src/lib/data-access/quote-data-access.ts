import axios from 'axios';
import { baseQuoteUrl } from '../config/quote-config';
import { Quote, QuoteInfo } from '../util/quote-models';

export const postQuote = async (quoteInfo: QuoteInfo): Promise<{ data: { quote: Quote } }> => {
    return await axios.post(baseQuoteUrl, { ...quoteInfo })
}

export const putQuote = async (quote: Quote, deductible: number, asteroid_collision: number) => {
    return await axios.put(baseQuoteUrl + `/${quote?.quoteId}`,
        {
            quote: {
                quoteId: quote?.quoteId,
                rating_address: quote?.rating_address,
                policy_holder: quote?.policy_holder,
                variable_selections: {
                    deductible: deductible,
                    asteroid_collision: asteroid_collision
                }
            }
        })
}