import { PageProps } from '../MultipageDialog';
import css from "../MultipageDialog.module.scss";
import Switch from '../components/Switch';
import RadioSelect from '../components/RadioSelect';
import plansData from "../models/plans";

const { plans } = plansData;

const itemComponentsMo = plans.map(plan => {
  return () => <div className={css["option_container"]} >
    <div className={css["option_title"]}>{plan.title}</div>
    <div className={css["option_price"]}>${plan.priceMonthly}/mo</div>
  </div>
});

const itemComponentsYr = plans.map(plan => {
  return () => <div className={css["option_container"]} >
    <div className={css["option_title"]}>{plan.title}</div>
    <div className={css["option_price"]}>${plan.priceYearly}/yr</div>
  </div>
});

const itemValues = plans.map(plan => plan.value);

function SecondPage({ register, errors, watch }: PageProps) {

  const planType = watch("planTypeYearly");

  return (
    <>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <RadioSelect 
        register={register} 
        name="plan" 
        itemComponents={planType ? itemComponentsYr : itemComponentsMo} 
        values={itemValues} />

      <div className={css["plan_type_container"]}>
        Monthly <Switch {...register("planTypeYearly")} /> Yearly
      </div>
    </>
  )
}

export default SecondPage
