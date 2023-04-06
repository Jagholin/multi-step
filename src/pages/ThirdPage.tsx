import { FieldValues, UseFormRegister } from 'react-hook-form';
import { MyFieldValues, PageProps } from '../MultipageDialog'
import css from "../MultipageDialog.module.scss";
import plansData, { AddonType } from "../models/plans";

const { addons } = plansData;

type CheckboxPanelProps = Omit<PageProps, "errors" | "watch" | "handleChangePlan"> & {
  name: AddonType;
  title: string;
  description: string;
  price: string;
}

function CheckboxPanel ({ register, name, title, description, price }: CheckboxPanelProps) {
  return (
    <div className={css["addon_item"]}>
      <input type="checkbox" {...register(name)} />
      <div className={css["addon_item--content"]}>
        <div className={css["addon_item--title"]}>{title}</div>
        <div className={css["addon_item--description"]}>{description}</div>
      </div>
      <div className={css["addon_item--price"]}>{price}</div>
    </div>
  )
}

const itemComponentsMo = (register: UseFormRegister<MyFieldValues>) => addons.map(addon => {
  return <CheckboxPanel
    key={addon.value}
    register={register}
    name={addon.value}
    title={addon.title}
    description={addon.description}
    price={`$${addon.priceMonthly}/mo`} />
});

const itemComponentsYr = (register: UseFormRegister<MyFieldValues>) => addons.map(addon => {
  return <CheckboxPanel
    key={addon.value}
    register={register}
    name={addon.value}
    title={addon.title}
    description={addon.description}
    price={`$${addon.priceYearly}/yr`} />
});

function ThirdPage({ register, errors, watch }: PageProps) {
  const planType = watch("planTypeYearly");
  return (
    <>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className={css["addon_container"]}>
        {planType ? itemComponentsYr(register) : itemComponentsMo(register)}
      </div>
    </>
  )
}

export default ThirdPage
