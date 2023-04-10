import React, { useEffect, useId } from 'react'
import { PageProps } from '../MultipageDialog';
import css from '../styles/FirstPage.module.scss';

// Email pattern from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation
const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const PHONE_PATTERN = /^\+?[0-9 ]+$/;

function FirstPage({ register, errors, setCurrentFields }: PageProps) {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();

  console.log("Error elements:", errors);

  useEffect(() => {
    setCurrentFields(["name", "email", "phone"]);
  }, []);

  return (
    <>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <div className={css["first_page"]}>
        <label>
          <span>Name</span> {errors.name && <span className={css["error"]}>This field is required</span>}
          <input type="text" id={nameId} {...register("name", {required: true})} placeholder='e.g. Stephen King' />
        </label>

        <label>
          <span>Email Address</span> {errors.email && <span className={css["error"]}>{errors.email.type === "pattern" ? "Incorrect Email format" : "This field is required"}</span>}
          <input type="email" id={emailId} {...register("email", {required: true, pattern: EMAIL_PATTERN})} placeholder='e.g. stephenking@lorem.com' />
        </label>

        <label>
          <span>Phone Number</span> {errors.phone && <span className={css["error"]}>{errors.phone.type === "pattern" ? "Incorrect phone format" : "This field is required"}</span>}
          <input type="text" id={phoneId} {...register("phone", {required: true, pattern: PHONE_PATTERN})} placeholder='e.g. +1 234 567 890' />
        </label>
      </div>
    </>
  )
}

export default FirstPage
