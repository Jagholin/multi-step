export type PlanType = "arcade" | "advanced" | "pro";
export type AddonType = "online" | "storage" | "profile";

export type PlanDescription = {
  plans: {
    title: string;
    priceMonthly: number;
    priceYearly: number;
    value: PlanType;
  }[];
  addons: {
    title: string;
    description: string;
    priceMonthly: number;
    priceYearly: number;
    value: AddonType;
  }[];
}

export default {
  plans: [
    {
      title: "Arcade",
      priceMonthly: 9,
      priceYearly: 90,
      value: "arcade",
    },
    {
      title: "Advanced",
      priceMonthly: 12,
      priceYearly: 120,
      value: "advanced",
    },
    {
      title: "Pro",
      priceMonthly: 15,
      priceYearly: 150,
      value: "pro",
    },
  ],
  addons: [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      priceMonthly: 1,
      priceYearly: 10,
      value: "online",
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      priceMonthly: 2,
      priceYearly: 20,
      value: "storage",
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      priceMonthly: 2,
      priceYearly: 20,
      value: "profile",
    },
  ],
} as PlanDescription;
