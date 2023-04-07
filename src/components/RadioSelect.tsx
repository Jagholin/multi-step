import React from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import css from "../styles/RadioSelect.module.scss";

type Props<FV extends FieldValues> = {
  register: UseFormRegister<FV>;
  itemComponents: React.ComponentType[];
  name: Path<FV>;
  values: string[];
  required?: boolean;
}

function RadioSelect<FV extends FieldValues>({ register, itemComponents, name, values, required }: Props<FV>) {
  return (
    <div className={css["radio_group"]}>
      {itemComponents.map((ItemComponent, index) => (
        <label key={index} className={css["radio_group--item"]}>
          <input type="radio" {...register(name, {required})} value={values[index]} />
          <div className={css["radio_group--content"]}>
            <ItemComponent />
          </div>
        </label>
      ))}
    </div>
  );
}

export default RadioSelect
