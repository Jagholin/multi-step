import React, { forwardRef, useEffect, useRef, useState } from 'react'
import css from "../styles/Switch.module.scss";

const Switch = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
(props: React.InputHTMLAttributes<HTMLInputElement>, cbRef) => {
  const [switchChecked, setSwitchChecked] = useState(false);

  return (
    <label className={`${css["switch"]} ${switchChecked ? css["checked"] : ""}`}>
      <input 
        ref={cbRef} 
        type="checkbox" 
        className={css["switch--checkbox"]} 
        {...props} />
      <span className={css["switch--slider"]}></span>
    </label>
  )
});

export default Switch
