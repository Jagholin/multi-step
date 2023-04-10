export type PlanType = "arcade" | "advanced" | "pro";
export type AddonType = "online" | "storage" | "profile";

import arcade_icon from "../assets/images/icon-arcade.svg";
import advanced_icon from "../assets/images/icon-advanced.svg";
import pro_icon from "../assets/images/icon-pro.svg";

export type PlanDescription = {
  plans: {
    title: string;
    priceMonthly: number;
    priceYearly: number;
    value: PlanType;
    image: string;
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
      image: arcade_icon,
    },
    {
      title: "Advanced",
      priceMonthly: 12,
      priceYearly: 120,
      value: "advanced",
      image: advanced_icon,
    },
    {
      title: "Pro",
      priceMonthly: 15,
      priceYearly: 150,
      value: "pro",
      image: pro_icon,
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
