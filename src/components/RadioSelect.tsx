import React from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form';
import css from "./RadioSelect.module.scss";

type Props = {
  register: UseFormRegister<FieldValues>;
  itemComponents: React.ComponentType[];
  name: string;
  values: string[];
}

function RadioSelect({ register, itemComponents, name, values }: Props) {
  return (
    <div className={css["radio_group"]}>
      {itemComponents.map((ItemComponent, index) => (
        <label key={index} className={css["radio_group--item"]}>
          <input type="radio" {...register(name)} value={values[index]} />
          <div className="radio_group--content">
            <ItemComponent />
          </div>
        </label>
      ))}
    </div>
  );
}

export default RadioSelect