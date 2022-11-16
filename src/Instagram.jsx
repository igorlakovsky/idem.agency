import { Button, Col, Row } from "antd";

import { useState } from "react";

export function Instagram() {
  const [photoRowCount, setPhotoRowCount] = useState(0);

  const photos = () => {
    let ret = [];
    for (var i = 0; i < photoRowCount * 2; i++) {
      ret.push(
        <Col span={12} key={i}>
          <Row gutter={[30, 30]}>
            <Col span={12}>
              <div className="instagram__photo"></div>
            </Col>
            <Col span={12}>
              <div className="instagram__photo"></div>
            </Col>
            <Col span={12}>
              <div className="instagram__photo"></div>
            </Col>
            <Col span={12}>
              <div className="instagram__photo"></div>
            </Col>
          </Row>
        </Col>
      );
    }
    return ret;
  };

  return (
    <div className="instagram">
      <div className="instagram__wrapper">
        <div className="instagram__title">мы в инстаграме</div>
        <Row gutter={[30, 30]} className="instagram__row">
          <Col span={12}>
            <div className="instagram__photo"></div>
          </Col>
          <Col span={12}>
            <Row gutter={[30, 30]}>
              <Col span={12}>
                <div className="instagram__photo"></div>
              </Col>
              <Col span={12}>
                <div className="instagram__photo"></div>
              </Col>
              <Col span={12}>
                <div className="instagram__photo"></div>
              </Col>
              <Col span={12}>
                <div className="instagram__photo"></div>
              </Col>
            </Row>
          </Col>
          {photos()}
        </Row>
        <Button
          block
          className="instagram__button"
          type="link"
          onClick={() => {
            if (photoRowCount < 2) setPhotoRowCount(photoRowCount + 1);
          }}
        >
          показать ещё
        </Button>
      </div>
    </div>
  );
}
