import React from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import css from "./RadioSelect.module.scss";

type Props<FV extends FieldValues> = {
  register: UseFormRegister<FV>;
  itemComponents: React.ComponentType[];
  name: Path<FV>;
  values: string[];
}

function RadioSelect<FV extends FieldValues>({ register, itemComponents, name, values }: Props<FV>) {
  return (
    <div className={css["radio_group"]}>
      {itemComponents.map((ItemComponent, index) => (
        <label key={index} className={css["radio_group--item"]}>
          <input type="radio" {...register(name)} value={values[index]} />
          <div className={css["radio_group--content"]}>
            <ItemComponent />
          </div>
        </label>
      ))}
    </div>
  );
}

export default RadioSelect
