import { FieldValues, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { MyFieldValues, PageProps } from '../MultipageDialog'
import css from "../styles/ThirdPage.module.scss";
import plansData, { AddonType } from "../models/plans";
import { useCallback, useEffect } from 'react';

const { addons } = plansData;

type CheckboxPanelProps = Omit<PageProps, "errors" | "setFocus" | "setCurrentPage" | "setCurrentFields"> & {
  name: AddonType;
  title: string;
  description: string;
  price: string;
}

function CheckboxPanel ({ register, name, title, description, price, watch, setValue }: CheckboxPanelProps) {
  const checkboxState = watch(name);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setValue(name, !checkboxState);
  }, [checkboxState]);
  
  return (
    <div className={`${css["addon_item"]} ${checkboxState ? css["checked"] : ""}`} onClick={handleClick}>
      <input type="checkbox" {...register(name)} />
      <div className={css["addon_item--content"]}>
        <div className={css["addon_item--title"]}>{title}</div>
        <div className={css["addon_item--description"]}>{description}</div>
      </div>
      <div className={css["addon_item--price"]}>{price}</div>
      <div className={css["addon_item--background"]} />
    </div>
  )
}

const itemComponentsMo = (register: UseFormRegister<MyFieldValues>
  , watch: UseFormWatch<MyFieldValues>
  , setValue: UseFormSetValue<MyFieldValues>
    ) => addons.map(addon => {
  return <CheckboxPanel
    key={addon.value}
    register={register}
    setValue={setValue}
    watch={watch}
    name={addon.value}
    title={addon.title}
    description={addon.description}
    price={`+$${addon.priceMonthly}/mo`} />
});

const itemComponentsYr = (register: UseFormRegister<MyFieldValues>
  , watch: UseFormWatch<MyFieldValues>
  , setValue: UseFormSetValue<MyFieldValues>
    ) => addons.map(addon => {
  return <CheckboxPanel
    key={addon.value}
    register={register}
    setValue={setValue}
    watch={watch}
    name={addon.value}
    title={addon.title}
    description={addon.description}
    price={`+$${addon.priceYearly}/yr`} />
});

function ThirdPage({ register, watch, setCurrentFields, setValue, setFocus }: PageProps) {
  const planType = watch("planTypeYearly");
  useEffect(() => {
    setCurrentFields(addons.map(addon => addon.value));
    setFocus(addons[0].value);
  }, []);

  return (
    <>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className={css["addon_container"]}>
        {planType ? itemComponentsYr(register, watch, setValue) : itemComponentsMo(register, watch, setValue)}
      </div>
    </>
  )
}

export default ThirdPage
