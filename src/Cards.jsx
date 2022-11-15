import { Carousel, Image } from "antd";
import { NextArrow, PrevArrow } from "./Banner";

function Card({ name, text, photoUrl }) {
  return (
    <div className="card__wrapper">
      <div className="card__name">{name}</div>
      <div className="card__text">{text}</div>
      <Image rootClassName="card__photo" src={photoUrl} preview={false} />
    </div>
  );
}

export function Cards() {
  return (
    <div className="cards">
      <div className="cards__wrapper">
        <div className="cards__title">вакансии в гросс маркете</div>
        <Carousel
          arrows
          dots={false}
          slidesToShow={3}
          infinite={false}
          prevArrow={<PrevArrow right="42px" top="-72px" />}
          nextArrow={<NextArrow right="0px" top="-72px" />}
        >
          <Card
            name="товаровед"
            text="Доставка товара по магазинам и гипермаркетам компании в обслуживаемом
                  регионе"
            photoUrl="img/photo_1.png"
          />
          <Card
            name="водитель"
            text="Доставка товара по магазинам и гипермаркетам компании в обслуживаемом
                  регионе"
            photoUrl="img/photo_2.png"
          />
          <Card
            name="пекарь"
            text="Доставка товара по магазинам и гипермаркетам компании в обслуживаемом
                  регионе"
            photoUrl="img/photo_3.png"
          />
          <Card
            name="кассир"
            text="Доставка товара по магазинам и гипермаркетам компании в обслуживаемом
                  регионе"
            photoUrl="img/photo_4.png"
          />
          <Card
            name="продавец"
            text="Доставка товара по магазинам и гипермаркетам компании в обслуживаемом
                  регионе"
            photoUrl="img/photo_5.png"
          />
          <Card
            name="повар"
            text="Доставка товара по магазинам и гипермаркетам компании в обслуживаемом
                  регионе"
            photoUrl="img/photo_6.png"
          />
          <Card
            name="приёмщик"
            text="Доставка товара по магазинам и гипермаркетам компании в обслуживаемом
                  регионе"
            photoUrl="img/photo_7.png"
          />
        </Carousel>
      </div>
    </div>
  );
}
