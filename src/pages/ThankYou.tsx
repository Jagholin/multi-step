import React from 'react'
import css from "../styles/ThankYou.module.scss";

function ThankYou() {
  return (
    <div className={css["final_container"]}>
      <div className={css["icon_checkmark"]}></div>
      <h2>Thank you!</h2>
      <p>Thanks for confirming your subscription! We hope you have fun 
      using our platform. If you ever need support, please feel free 
      to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default ThankYou
