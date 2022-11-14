import "./App.css";

import { Button, Image, Layout } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="header__logo">
            <Image
              className="header__logo__img"
              src="logo.png"
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
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
