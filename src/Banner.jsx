import { Button, Carousel, Image } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <Button
      className="banner__arrow"
      style={{
        left: "44px",
        bottom: "48px",
        borderRadius: "0px 8px 8px 0px",
      }}
      icon={<CaretRightFilled />}
      onClick={onClick}
      size="large"
      type="link"
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Button
      className="banner__arrow"
      style={{
        zIndex: 1,
        left: "0px",
        bottom: "48px",
        borderRight: "1px solid #f5f5f5",
        borderRadius: "8px 0px 0px 8px",
      }}
      icon={<CaretLeftFilled />}
      onClick={onClick}
      size="large"
      type="link"
    />
  );
}

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__wrapper">
        <Carousel
          arrows
          autoplay
          autoplaySpeed={5000}
          dots={false}
          effect="fade"
          speed={700}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          <div className="banner__content">
            <div className="banner__content__slogan">У тебя к этому талант</div>
            <Image src="banner_1.png" preview={false} />
          </div>
          <div className="banner__content">
            <div className="banner__content__slogan">
              У тебя всё под контролем
            </div>
            <Image src="banner_2.png" preview={false} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
