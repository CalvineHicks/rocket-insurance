import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Address, QuoteInfo } from '../../util/quote-models';
import './get-quote-info-ui.module.scss';

/* eslint-disable-next-line */
export interface GetQuoteInfoProps {
  setQuoteInfo: Function;
}

export function GetQuoteInfo({ setQuoteInfo }: GetQuoteInfoProps) {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [address, setAddress] = useState<Address>();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (e: QuoteInfo) => {
    console.log(e);
    setQuoteInfo(e)
  }



  return (
    <div className='container'>
      <h1>Quote Intake Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input className={errors['firstName'] && 'invalid'} {...register('firstName', { required: true })} />
        </label>
        <label>
          Last Name:
          <input className={errors['lastName'] && 'invalid'} {...register('lastName', { required: true })} />
        </label>
        Address:
        <div className='address-info'>
          <label>
            Line 1:
            <input className={errors['line_1'] && 'invalid'} {...register('address.line_1', { required: true })} />
          </label>
          <label>
            Line 2 (optional):
            <input {...register('address.line_2')} />
          </label>
          <label>
            City:
            <input className={errors['city'] && 'invalid'} {...register('address.city', { required: true })} />
          </label>
          <label>
            Region:
            <input className={errors['region'] && 'invalid'} {...register('address.region', { required: true })} />
          </label>
          <label>
            Postal:
            <input className={errors['postal'] && 'invalid'} {...register('address.postal', { required: true })} />
          </label>
        </div>
        <div className='submit'>
          <button type='submit'>Submit</button>
        </div>
        <div className='error-message'>{Object.keys(errors).length > 0 && <div><hr />*Missing some required fields.  Please correct the form and resubmit.</div>}</div>
      </form>
    </div>
  );
}

export default GetQuoteInfo;
