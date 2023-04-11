import { PageProps } from '../MultipageDialog';
import css from "../styles/SecondPage.module.scss";
import Switch from '../components/Switch';
import RadioSelect from '../components/RadioSelect';
import plansData from "../models/plans";
import { useEffect } from 'react';

const { plans } = plansData;

const itemComponentsMo = plans.map(plan => {
  return () => <div className={css["option_container"]} >
    <div className={css["option_icon"]} style={{["--icon-path" as string]: `url(${plan.image})`}}></div>
    <div className={css["option_title"]}>{plan.title}</div>
    <div className={css["option_price"]}>${plan.priceMonthly}/mo</div>
  </div>
});

const itemComponentsYr = plans.map(plan => {
  return () => <div className={css["option_container"]} >
    <div className={css["option_icon"]} style={{["--icon-path" as string]: `url(${plan.image})`}}></div>
    <div className={css["option_title"]}>{plan.title}</div>
    <div className={css["option_price"]}>${plan.priceYearly}/yr</div>
    <div className={css["option_savings"]}>2 months free</div>
  </div>
});

const itemValues = plans.map(plan => plan.value);

function SecondPage({ register, errors, watch, setCurrentFields, setFocus }: PageProps) {

  const planType = watch("planTypeYearly");

  useEffect(() => {
    setCurrentFields(["plan", "planTypeYearly"]);
    setFocus("plan");
  }, []);

  return (
    <>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <RadioSelect 
        register={register} 
        name="plan" 
        itemComponents={planType ? itemComponentsYr : itemComponentsMo} 
        values={itemValues}
        required />

      <div className={css["plan_type_container"]}>
        <span className={planType ? "" : css["selected"]}>Monthly</span> 
        <Switch {...register("planTypeYearly")} /> 
        <span className={planType ? css["selected"] : ""}>Yearly</span>
      </div>
    </>
  )
}

export default SecondPage
