import React from "react";
import one from "../../../../img/icons/one.svg";
import three from "../../../../img/icons/three.svg";
import two from "../../../../img/icons/two.svg";

const Shop = () => {
  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="shop__content">
              <span className="shop__content-img">
                <img src={one} alt="" />
              </span>
              <p className="shop__content-text">
                Кешбек позволяет вам вернуть часть денег, потраченных на
                покупки, что делает шоппинг более выгодным.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="shop__content">
              <span className="shop__content-img">
                <img src={two} alt="" />
              </span>
              <p className="shop__content-text">
              Сервисы кешбека часто предлагают информацию о текущих скидках и распродажах в разных магазинах.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="shop__content">
              <span className="shop__content-img">
                <img src={three} alt="" />
              </span>
              <p className="shop__content-text">
              Кешбек особенно выгоден при покупке дорогих товаров, таких как электроника, мебель, путешествия.
              </p>
            </div>
          </div>
        </div>
        <h3 className="shop__title">
          Сотни магазинов,<br /> тысячи  выгодных <br/> предложений!
        </h3>
        <p className="shop__text">
          AYO — это ваш личный помощник в мире онлайн-
          <br /> шоппинга, который помогает экономить на любимых <br />
          товарах и услугах.
        </p>
        <p className="shop__text">
          С AYO вы получаете кешбек за каждую покупку, <br /> сделанную через
          наш сайт или приложение. Это <br /> означает, что вы возвращаете часть
          денег обратно на <br /> свой счет, делая покупки еще более выгодными.
        </p>
      </div>
    </section>
  );
};

export default Shop;
