import { Button, Col, Image, Layout, Row } from "antd";

import { Banner } from "./Banner";
import { Cards } from "./Cards";
import { Instagram } from "./Instagram";
import { Location } from "./Location";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout style={{ background: "transparent" }}>
        <Header className="header">
          <div className="header__wrapper">
            <div className="header__logo">
              <Image
                className="header__logo__img"
                src="img/logo.png"
                preview={false}
              />
              <div className="header__logo__text">гросс маркет</div>
            </div>
            <div className="header__info">
              <a className="header__info__number" href="tel:+79264331416">
                +7 (926) 433-14-16
              </a>
              <Button className="header__info__button">заполнить анкету</Button>
            </div>
          </div>
        </Header>
        <Content className="content">
          <Banner />
          <Cards />
          <Instagram />
          <Location />
        </Content>
        <Footer className="footer">
          <div className="footer__wrapper">
            <Row gutter={[48, 48]} className="footer__row" align="middle">
              <Col span={12}>
                <div className="header__logo">
                  <Image
                    className="header__logo__img"
                    src="img/logo.png"
                    preview={false}
                  />
                  <div className="header__logo__text">гросс маркет</div>
                </div>
              </Col>
              <Col span={8}>
                <div className="footer__share">поделиться</div>
              </Col>
              <Col span={4} className="footer__share__icons">
                <Image
                  className="footer__share__icon"
                  src="img/icon-facebook.png"
                  preview={false}
                />
                <Image
                  className="footer__share__icon"
                  src="img/icon-vk.png"
                  preview={false}
                />
              </Col>
            </Row>
            <Row gutter={[48, 48]} className="footer__info" align="middle">
              <Col span={12}>© Гросс маркет 2020</Col>
              <Col span={12}>
                <Button type="link" className="footer__info__policy">
                  Политика обработки персональных данных
                </Button>
              </Col>
            </Row>
          </div>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
