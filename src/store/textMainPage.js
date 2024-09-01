import { createAction, createReducer } from "@reduxjs/toolkit";

const intitialState = {
  heroText: {
    ru: `Получите деньги 
    обратно за каждую
покупку!`,
    en: "Get cash back on every purchase!",
    spa: "",
  },
  shopTitle: {
    ru: `Сотни магазинов, тысячи
выгодных предложений!`,
    en: `Hundreds of stores, thousands of great deals!`,
    spa: ``,
  },
  shopText1: {
    ru: `AYO — это ваш личный помощник в мире онлайн-
шоппинга, который помогает экономить на любимых
товарах и услугах.`,
    en: `AYO - is your personal assistant in the world of online shopping, which helps you save on your favorite products and services.`,
    spa: ``,
  },
  shopText2: {
    ru: `С AYO вы получаете кешбек за каждую покупку,
сделанную через наш сайт или приложение. Это
означает, что вы возвращаете часть денег обратно на
свой счет, делая покупки еще более выгодными.`,
    en: `With AYO, you will get cashback on every purchase you make through our website or app. This means you will get some of the money back into your account, making your purchases even more profitable.`,
    spa: ``,
  },
};

export default createReducer(intitialState);
