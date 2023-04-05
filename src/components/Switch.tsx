import React from 'react'
import css from "./Switch.module.scss";

function Switch(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={css["switch"]}>
      <input type="checkbox" className={css["switch--checkbox"]} {...props} />
      <span className={css["switch--slider"]}></span>
    </div>
  )
}

export default Switch