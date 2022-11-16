import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Image,
  Input,
  Layout,
  Modal,
  Radio,
  Row,
  Select,
  Upload,
} from "antd";

import { CloseOutlined } from "@ant-design/icons";
import ReCAPTCHA from "react-google-recaptcha";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Header, Footer, Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

export function Registation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Layout style={{ background: "transparent" }}>
        <Header className="header header_form">
          <div className="header__wrapper">
            <div className="header__logo">
              <Image
                className="header__logo__img"
                src="img/logo.png"
                preview={false}
              />
              <div className="header__logo__text">гросс маркет</div>
            </div>
            <div className="header__close_form">
              <Button href="/" type="link" icon={<CloseOutlined />}></Button>
            </div>
          </div>
        </Header>
        <Content className="content">
          <div className="form__wrapper">
            <div className="form__title">Работа твоей мечты</div>
            <Row gutter={[60, 0]}>
              <Col lg={12} sm={24} xs={24}>
                <Form
                  layout="vertical"
                  name="basic"
                  size="large"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={() => {}}
                  onFinishFailed={() => {}}
                  autoComplete="off"
                >
                  <Row gutter={[30, 0]}>
                    <Col lg={24} sm={24} xs={24}>
                      <Form.Item
                        label="Вакансия"
                        name="vacancy"
                        rules={[
                          {
                            required: true,
                            message: "Выберете название вакансии!",
                          },
                        ]}
                      >
                        <Select className="form__input">
                          <Option value="товаровед"></Option>
                          <Option value="водитель"></Option>
                          <Option value="пекарь"></Option>
                          <Option value="кассир"></Option>
                          <Option value="продавец"></Option>
                          <Option value="повар"></Option>
                          <Option value="приёмщик"></Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col lg={24} sm={24} xs={24}>
                      <Form.Item
                        label="ФИО"
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Введите ФИО!",
                          },
                        ]}
                      >
                        <Input className="form__input" />
                      </Form.Item>
                    </Col>
                    <Col lg={12} sm={12} xs={24}>
                      <Form.Item
                        label="Дата рождения"
                        name="data"
                        rules={[
                          {
                            required: true,
                            message: "Укажите дату рождения!",
                          },
                        ]}
                      >
                        <DatePicker
                          className="form__input"
                          style={{ width: "100%" }}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} sm={12} xs={24}>
                      <Form.Item
                        label="Пол"
                        name="gender"
                        rules={[
                          {
                            required: true,
                            message: "Выберете пол!",
                          },
                        ]}
                      >
                        <Radio.Group size="large">
                          <Radio value={1} className="form__input">
                            Мужской
                          </Radio>
                          <Radio value={2} className="form__input">
                            Женский
                          </Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col lg={12} sm={12} xs={24}>
                      <Form.Item
                        label="Контактный телефон"
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Укажите телефон!",
                          },
                        ]}
                      >
                        <Input className="form__input" />
                      </Form.Item>
                    </Col>
                    <Col lg={12} sm={12} xs={24}>
                      <Form.Item label="Электронная почта" name="email">
                        <Input className="form__input" />
                      </Form.Item>
                    </Col>
                    <Col lg={24} sm={24} xs={24}>
                      <Form.Item label="Резюме" name="resume">
                        <TextArea className="form__input" />
                        <Upload>
                          <Button
                            block
                            icon={<UploadOutlined />}
                            style={{ marginTop: "20px" }}
                            className="form__input"
                          >
                            выберете или перетащите файл
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>

                    <Col lg={24} sm={24} xs={24}>
                      <Form.Item label="" name="agreement">
                        <Checkbox className="form__input">
                          я подтверждаю согласие на обработку персональных
                          данных и принимаю условия рассмотрения обращений *
                        </Checkbox>
                      </Form.Item>
                    </Col>

                    <Col lg={24} sm={24} xs={24}>
                      <Form.Item label="" name="send">
                        <Button
                          block
                          style={{ marginTop: "30px" }}
                          htmlType="submit"
                        >
                          Отправить
                        </Button>
                      </Form.Item>
                    </Col>
                    <Col lg={24} sm={24} xs={24}>
                      <Form.Item label="" name="lol">
                        <div
                          className="form__input"
                          style={{
                            opacity: 0.3,
                          }}
                        >
                          * поля для обязательного заполнения
                        </div>
                      </Form.Item>
                    </Col>
                    <Col lg={24} sm={24} xs={24}>
                      <Form.Item label="Капча" name="lol">
                        <ReCAPTCHA
                          sitekey="6LfSHQ8jAAAAAJ2vypE42eW-mC3vZ1YFr17U27WE"
                          size=""
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col lg={12} sm={24} xs={24}>
                <div className="form__info">Наша суперцель</div>
                <div className="form__text">
                  — стать любимым магазином для каждой российской семьи.
                  <br />
                  <br />
                  Сотни тысяч наших сотрудников ежедневно работают над её
                  достижением.
                  <br />
                  <br />
                  Мы уверены, что в ближайшие годы достигнем этого и будет
                  здорово,если вместе с тобой.
                </div>
                <div className="form__phone">+7 (926) 433-14-16</div>
              </Col>
            </Row>
          </div>
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
