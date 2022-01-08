import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { QuoteInfo } from "../../util/quote-models";
import './get-quote-info-ui.module.scss';

/* eslint-disable-next-line */
export interface GetQuoteInfoProps {
  setQuoteInfo: Function;
}

export function GetQuoteInfo({ setQuoteInfo }: GetQuoteInfoProps) {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (e: QuoteInfo) => {
    console.log(e);
    setQuoteInfo(e)
  }

  useEffect(() => 
  console.log('calvin says, ', errors));

  return (
    <div className='get-quote'>
      <h1>Quote Intake Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input className={errors['first_name'] && 'invalid'} {...register('first_name', { required: true })} />
        </label>
        <label>
          Last Name:
          <input className={errors['last_name'] && 'invalid'} {...register('last_name', { required: true })} />
        </label>
        Address:
        <div className='address-info'>
          <label>
            Line 1:
            <input className={errors['address']['line_1'] && 'invalid'} {...register('address.line_1', { required: true })} />
          </label>
          <label>
            Line 2 (optional):
            <input {...register('address.line_2')} />
          </label>
          <label>
            City:
            <input className={errors['address']['city'] && 'invalid'} {...register('address.city', { required: true })} />
          </label>
          <label>
            Region:
            <input className={errors['address']['region'] && 'invalid'} {...register('address.region', { required: true })} />
          </label>
          <label>
            Postal:
            <input className={errors['address']['postal'] && 'invalid'} {...register('address.postal', { required: true })} />
          </label>
        </div>
        <div className='submit'>
          <button>Submit</button>
        </div>
        <div className='error-message'>{Object.keys(errors).length > 0 && <div><hr />*Missing some required fields.  Please correct the form and resubmit.</div>}</div>
      </form>
    </div>
  );
}

export default GetQuoteInfo;
