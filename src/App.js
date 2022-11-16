import { Button, Col, Image, Layout, Modal, Row } from "antd";

import { Banner } from "./Banner";
import { Cards } from "./Cards";
import { Instagram } from "./Instagram";
import { Location } from "./Location";
import { useState } from "react";

const { Header, Footer, Content } = Layout;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div className="header__icon">
              <a href="tel:+79264331416">
                <Image src="img/icon-phone.png" preview={false} />
              </a>
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
            <Row
              gutter={[48, 0]}
              className="footer__row"
              align="middle"
              justify="space-between"
            >
              <Col md={12} sm={16} xs={24}>
                <div className="header__logo">
                  <Image
                    className="header__logo__img"
                    src="img/logo.png"
                    preview={false}
                  />
                  <div className="header__logo__text">гросс маркет</div>
                </div>
              </Col>
              <Col md={8} sm={0} xs={0}>
                <div className="footer__share">поделиться</div>
              </Col>
              <Col md={4} sm={8} xs={0} className="footer__share__icons">
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
            <Row
              gutter={[48, 0]}
              className="footer__info"
              align="middle"
              justify="space-between"
            >
              <Col md={12}>© Гросс маркет 2020</Col>
              <Col md={12}>
                <Button
                  type="link"
                  className="footer__info__policy"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  Политика обработки персональных данных
                </Button>
              </Col>
            </Row>
          </div>
        </Footer>
      </Layout>
      <Modal
        title="Обработка данных"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        width="80%"
      >
        <div className="modal__title">
          1. Что регулирует настоящая политика конфиденциальности
        </div>
        <div className="modal__text">
          Настоящая политика конфиденциальности (далее — Политика) действует в
          отношении всей информации, включая персональные данные в понимании
          применимого законодательства (далее — «Персональная информация»),
          которую ООО «Гросс маркет» и/или его аффилированные лица, в том числе
          входящие в одну группу с ООО «Гросс маркет» (далее — «Гросс маркет»),
          могут получитьо Вас в процессе использования Вами любых сайтов,
          программ, продуктов и/или сервисов Гросс маркет (далее вместе
          «Сервисы»), информацию о которых Гросс маркет может также получать
          Персональную информацию от своих партнеров (далее — «Партнеры»),
          сайты, программы, продукты или сервисы которых Вы используете
          (например, от рекламодателей Гросс маркет или службами такси). В таких
          случаях передача Персональной информации возможна только в случаях,
          установленных применимым законодательством, и осуществляется на
          основании специальных договоров между Гросс маркет и каждым из
          Партнеров.
          <span>
            <br />
            <br />
            Пожалуйста, обратите внимание, что использование любого из Сайтов
            и/или Сервисов может регулироваться дополнительными условиями,
            которые могут вносить в настоящую Политику изменения и/или
            дополнения, и/или иметь специальные условия в отношении персональной
            информации, размещенные в соответствующих разделах документов для
            таких Сайтов /или Сервисов.
          </span>
        </div>
        <div className="modal__title">2. Кто обрабатывает информацию</div>
        <div className="modal__text">
          Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная
          информация собирается и используется Яндексом, в том числе включая
          общество с ограниченной ответственностью «Гросс маркет», юридическое
          лицо, созданное по законодательству Российской Федерации и
          зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д.
          12 (ООО «Гросс маркет»), или его аффилированным лицом, предоставляющим
          соответствующий Сервис в иных юрисдикциях. С информацией о том, какое
          лицо предоставляет тот или иной Сервис, Вы можете ознакомиться в
          условиях использования соответствующего Сервиса.
        </div>
        <div className="modal__title">3. Какова цель данной Политики</div>
        <div className="modal__text">
          Защита Вашей Персональной информации и Вашей конфиденциальности
          чрезвычайно важны для Гросс маркета. Поэтому при использовании Вами
          Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу
          Персональную информацию в строгом соответствии с применимым
          законодательством.
        </div>
        <div className="modal__title">
          4. Какую Персональную информацию о Вас собирает Гросс маркет
        </div>
        <div className="modal__text">
          Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная
          информация собирается и используется Яндексом, в том числе включая
          общество с ограниченной ответственностью «Гросс маркет», юридическое
          лицо, созданное по законодательству Российской Федерации и
          зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д.
          12 (ООО «Гросс маркет»), или его аффилированным лицом, предоставляющим
          соответствующий Сервис в иных юрисдикциях. С информацией о том, какое
          лицо предоставляет тот или иной Сервис, Вы можете ознакомиться в
          условиях использования соответствующего Сервиса.
        </div>
      </Modal>
    </>
  );
}

export default App;
