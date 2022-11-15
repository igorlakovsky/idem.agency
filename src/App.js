import { Button, Image, Layout } from "antd";

import { Banner } from "./Banner";
import { Cards } from "./Cards";

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
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
