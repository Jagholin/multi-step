import { PageProps } from "../MultipageDialog"
import plansData from "../models/plans";
import css from "../MultipageDialog.module.scss";

function LastPage({ watch, handleChangePlan }: PageProps) {
  const { plan, planTypeYearly, online, profile, storage } = watch();

  const myPlan = plansData.plans.find(p => p.value === plan);
  
  let total = (planTypeYearly ? myPlan?.priceYearly : myPlan?.priceMonthly) || 0;
  const planPricing = <li className={`${css["pricing_item_container"]} ${css["pricing_item_container--plan"]}`}>
    <div className={css["pricing_item_container--title"]}>
      <div>{myPlan?.title} ({planTypeYearly ? "Yearly" : "Monthly"})</div>
      <div><a href="#" onClick={handleChangePlan}>Change</a></div>
    </div>
    <div className={css["pricing_item_container--price"]}>
      ${planTypeYearly ? myPlan?.priceYearly + "/yr" : myPlan?.priceMonthly + "/mo"}
    </div>
  </li>

  const addonPricing: React.ReactNode[] = [];

  ([[online, "online"], [profile, "profile"], [storage, "storage"]] as const).forEach(([checked, value]) => {
    if (checked) {
      const addon = plansData.addons.find(a => a.value === value);
      total += (planTypeYearly ? addon?.priceYearly : addon?.priceMonthly) || 0;
      addonPricing.push(
        <li className={css["pricing_item_container"]} key={value}>
          <div className={css["pricing_item_container--title"]}>{addon?.title}</div>
          <div className={css["pricing_item_container--price"]}>
            +${planTypeYearly ? addon?.priceYearly + "/yr" : addon?.priceMonthly + "/mo"}
          </div>
        </li>
      );
    }
  });

  return (
    <>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

      <div className={css["pricing_container"]}>
        <ul className={css["pricing_list"]}>
          {planPricing}
        </ul>
        <ul className={css["pricing_list"]}>
          {addonPricing}
        </ul>
      </div>

      <div className={css["pricing_total"]}>
        <div className={css["pricing_total--title"]}>Total ({planTypeYearly ? "per year" : "per month"})</div>
        <div className={css["pricing_total--price"]}>${planTypeYearly ? total + "/yr" : total + "/mo"}</div>
      </div>
    </>
  )
}

export default LastPage
