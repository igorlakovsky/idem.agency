import { Button, Carousel, Image } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";

export function NextArrow(props) {
  const { onClick, className } = props;
  const backgroundColor = () => {
    if (className.indexOf("slick-disabled") !== -1) {
      return "#dfdfdf";
    } else {
      return "white";
    }
  };
  return (
    <Button
      className="banner__arrow"
      style={{
        left: props.left,
        right: props.right,
        top: props.top,
        bottom: props.bottom,
        borderRadius: "0px 8px 8px 0px",
        backgroundColor: backgroundColor(),
      }}
      icon={<CaretRightFilled />}
      onClick={onClick}
      size="large"
      type="link"
    />
  );
}

export function PrevArrow(props) {
  const { onClick, className } = props;
  const backgroundColor = () => {
    if (className.indexOf("slick-disabled") !== -1) {
      return "#dfdfdf";
    } else {
      return "white";
    }
  };
  return (
    <Button
      className="banner__arrow"
      style={{
        zIndex: 1,
        left: props.left,
        right: props.right,
        top: props.top,
        bottom: props.bottom,
        borderRight: "1px solid #f5f5f5",
        borderRadius: "8px 0px 0px 8px",
        backgroundColor: backgroundColor(),
      }}
      icon={<CaretLeftFilled />}
      onClick={onClick}
      size="large"
      type="link"
    />
  );
}

export function Banner() {
  return (
    <div className="banner">
      <div className="banner__wrapper">
        <Carousel
          arrows
          autoplay
          autoplaySpeed={5000}
          dots={false}
          effect="fade"
          speed={500}
          prevArrow={<PrevArrow left="0px" bottom="48px" />}
          nextArrow={<NextArrow left="42px" bottom="48px" />}
        >
          <div className="banner__content">
            <div className="banner__content__slogan">У тебя к этому талант</div>
            <Image src="img/banner_1.png" preview={false} />
          </div>
          <div className="banner__content">
            <div className="banner__content__slogan">
              У тебя всё под контролем
            </div>
            <Image src="img/banner_2.png" preview={false} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
