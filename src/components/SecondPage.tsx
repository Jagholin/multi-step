import React, { useId } from 'react'
import { PageProps } from './MultipageDialog';
import css from "./MultipageDialog.module.scss";

function SecondPage({ register, errors }: PageProps) {
  const planId = useId();
  const planTypeId = useId();


  return (
    <>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <select id={planId}>
        <option value="Arcade">
          <span className={css["option_title"]}>Arcade</span>
          <span className={css["option_price"]}>$9/mo</span>
        </option>
        <option value="Advanced">
          <span className={css["option_title"]}>Advanced</span>
          <span className={css["option_price"]}>$12/mo</span>
        </option>
        <option value="Pro">
          <span className={css["option_title"]}>Pro</span>
          <span className={css["option_price"]}>$15/mo</span>
        </option>
      </select>

      <div className={css["radio-group"]}>
        <div className={css}
      </div>

    </>
  )
}

export default SecondPage