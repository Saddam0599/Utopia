import React from "react";
import {
  Collapse,
  Select,
  Radio,
  Button,
  Dropdown,
  Menu,
  Checkbox,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../../App.css";
import MenuItems from "../../assets/icons/MenuItems.svg";
import Utopia from "../../assets/logos/Utopia.svg";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

const Sidebar: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item key="Продажа">Продажа</Menu.Item>
      <Menu.Item key="Дом">Дом</Menu.Item>
      <Menu.Item key="Площадка">Площадка</Menu.Item>
    </Menu>
  );

  const menu1 = (
    <Menu>
      <Menu.Item key="Аренда">Аренда</Menu.Item>
      <Menu.Item key="Квартира">Квартира</Menu.Item>
      <Menu.Item key="Дом">Дом</Menu.Item>
      <Menu.Item key="Площадка">Площадка</Menu.Item>
    </Menu>
  );

  const menu2 = (
    <Menu>
      <Menu.Item key="Сожит">Сожит.</Menu.Item>
      <Menu.Item key="Квартира соджит">Квартира соджит</Menu.Item>
      <Menu.Item key="Дом соджит">Дом соджит</Menu.Item>
      <Menu.Item key="Площадка соджит">Площадка соджит</Menu.Item>
    </Menu>
  );

  const { Panel } = Collapse;

  return (
    <aside className="sidebar" style={{ position: "fixed", zIndex: 1000 }}>
      <div>
        <Link to={"/"}>
        <img
          src={MenuItems}
          alt="MenuItems.svg"
          style={{
            width: "35px",
            height: "35px",
            marginTop: "38px",
            marginLeft: "14px",
          }}
        />
        </Link>
      </div>
      <img
        src={Utopia}
        alt="Utopia.svg"
        style={{
          width: "109px",
          height: "37px",
          marginTop: "38px",
          marginLeft: "38px",
          marginBottom: "23px",
        }}
      />
      <hr
        style={{
          width: "345px",
          height: "0.1px",
          backgroundColor: "rgba(238, 238, 238, 1)",
          marginBottom: "33px",
          marginLeft: "20px",
        }}
      />

      <h3 className="sidebar__title">Фильтр</h3>

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "96px",
            height: "45px",
            backgroundColor: "rgba(243, 243, 243, 1)",
            borderRadius: "5px",
            marginLeft: "21px",
            marginBottom: "21px",
            border: "none",
          }}
        >
          <Dropdown overlay={menu}>
            <Button
              style={{
                width: "96px",
                height: "45px",
                backgroundColor: "rgba(243, 243, 243, 1)",
                color: "rgba(154, 154, 154, 1)",
              }}
            >
              Продажа{" "}
              <div
                style={{
                  width: "0.1px",
                  height: "28px",
                  border: "0.1px solid rgba(153, 153, 153, 1) ",
                }}
              ></div>{" "}
              <DownOutlined
                style={{
                  width: 11,
                  height: 6,
                  color: " rgba(93, 93, 93, 1)",
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "21.09px",
                  textAlign: "center",
                  marginLeft: "-10.7px",
                }}
              />
            </Button>
          </Dropdown>
        </div>

        <div
          style={{
            width: "96px",
            height: "45px",
            backgroundColor: "rgba(243, 243, 243, 1)",
            borderRadius: "5px",
            marginBottom: "21px",
            border: "none",
            marginLeft: "21px",
            marginRight: "21px",
          }}
        >
          <Dropdown overlay={menu1}>
            <Button
              style={{
                width: "96px",
                height: "45px",
                backgroundColor: "rgba(243, 243, 243, 1)",
                color: "rgba(154, 154, 154, 1)",
              }}
            >
              Аренда{" "}
              <div
                style={{
                  width: "0.1px",
                  height: "28px",
                  border: "0.1px solid rgba(153, 153, 153, 1) ",
                }}
              ></div>{" "}
              <DownOutlined
                style={{
                  width: 11,
                  height: 6,
                  color: " rgba(93, 93, 93, 1)",
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "21.09px",
                  textAlign: "center",
                  marginLeft: "-8px",
                }}
              />
            </Button>
          </Dropdown>
        </div>

        <div
          style={{
            width: "96px",
            height: "45px",
            backgroundColor: "rgba(243, 243, 243, 1)",
            borderRadius: "5px",
            marginBottom: "21px",
            border: "none",
          }}
        >
          <Dropdown overlay={menu2}>
            <Button
              style={{
                width: "67px",
                height: "45px",
                backgroundColor: "rgba(243, 243, 243, 1)",
                color: "rgba(154, 154, 154, 1)",
                paddingLeft: "5vh",
                border: "none",
              }}
            >
              Сожит.{" "}
              <div
                style={{
                  width: "0.1px",
                  height: "28px",
                  border: "0.1px solid rgba(153, 153, 153, 1) ",
                }}
              ></div>{" "}
              <DownOutlined
                style={{
                  width: 11,
                  height: 6,
                  color: " rgba(93, 93, 93, 1)",
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "21.09px",
                  textAlign: "center",
                  marginLeft: "-8px",
                }}
              />
            </Button>
          </Dropdown>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "330px",
          height: "45px",
          backgroundColor: "rgba(243, 243, 243, 1)",
          marginLeft: "21px",
          borderRadius: "5px",
          marginTop: "30px",
          marginBottom: "40px",
          
        }}
      >
        <Collapse bordered={false} expandIconPosition="end">
          <Panel header="Категория недвижимости" key="3">
            <Select
              placeholder="Выберите категория недвижимости"
              style={{ width: "100%" }}
            >
              <Select.Option value="новостройки">Новостройки</Select.Option>
              <Select.Option value="квартиры">Квартиры</Select.Option>
              <Select.Option value="участки">Участки</Select.Option>
              <Select.Option value="земля">Земля</Select.Option>
              <Select.Option value="офисы">Офисы</Select.Option>
              <Select.Option value="магазины">Магазины</Select.Option>
            </Select>
          </Panel>
        </Collapse>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Collapse bordered={false} expandIconPosition="end">
          <Panel header="Область" key="4">
            <Select placeholder="Выберите область" style={{ width: "100%" }}>
              <Select.Option value="город Ташкент">Город Ташкент</Select.Option>
              <Select.Option value="ташкентская область">
                Ташкентская область
              </Select.Option>
              <Select.Option value="андижанская область">
                Андижанская область
              </Select.Option>
              <Select.Option value="бухарская область">
                Бухарская область
              </Select.Option>
              <Select.Option value="джизакская область">
                Джизакская область
              </Select.Option>
              <Select.Option value="каракалпакскан">
                Каракалпакскан
              </Select.Option>
            </Select>
          </Panel>
        </Collapse>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Collapse bordered={false} expandIconPosition="end">
          <Panel header="Район" key="5">
            <Select placeholder="Выберите район" style={{ width: "100%" }}>
              <Select.Option value="алмазарский район">
                Алмазарский район
              </Select.Option>
              <Select.Option value="бектемирский район">
                Бектемирский район
              </Select.Option>
              <Select.Option value="мирабадский район">
                Мирабадский район
              </Select.Option>
              <Select.Option value="мирзо-Улугбекский район">
                Мирзо-Улугбекский район
              </Select.Option>
              <Select.Option value="сергелийский район">
                Сергелийский район
              </Select.Option>
              <Select.Option value="чиланзарский район">
                Чиланзарский район
              </Select.Option>
            </Select>
          </Panel>
        </Collapse>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Collapse bordered={false} expandIconPosition="end">
          <Panel header="Ремонт" key="9">
            <Select placeholder="Выберите ремонт" style={{ width: "100%" }}>
              <Select.Option value="Евроремонт">Евроремонт</Select.Option>
              <Select.Option value="Hi-Tech">Hi-Tech</Select.Option>
              <Select.Option value="Обычный ремонт">
                Обычный ремонт
              </Select.Option>
              <Select.Option value="Советский ремонт">
                Советский ремонт
              </Select.Option>
              <Select.Option value="Категория ремонта">
                Категория ремонта
              </Select.Option>
            </Select>
            <Radio.Group style={{ display: "flex", flexDirection: "column" }}>
              <Radio value="yes">Да</Radio>
              <Radio value="no">Нет</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "14.06px",
              marginLeft: "20px",
            }}
          >
            Комнат
          </span>
          <div
            style={{
              width: "165px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              background: "rgba(243, 243, 243, 1)",
              borderRadius: "5px",
              paddingLeft: "35px",
            }}
          >
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "14.06px",
                marginRight: "5px",
              }}
            >
              от
            </span>
            <div>
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "14.06px",
                  marginLeft: "15px",
                }}
              >
                5
              </span>
              <hr
                style={{
                  width: "34px",
                  height: "1px",
                  background: "rgba(153, 153, 153, 1)",
                  marginRight: "10px",
                  marginTop: "3px",
                }}
              />
            </div>
            до{" "}
            <div>
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "14.06px",
                  marginLeft: "20px",
                }}
              >
                12
              </span>
              <hr
                style={{
                  width: "34px",
                  height: "1px",
                  background: "rgba(153, 153, 153, 1)",
                  marginLeft: "10px",
                  marginTop: "3px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "14.06px",
              marginLeft: "20px",
            }}
          >
            Площадь
          </span>
          <div
            style={{
              width: "165px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              background: "rgba(243, 243, 243, 1)",
              borderRadius: "5px",
              paddingLeft: "35px",
            }}
          >
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "14.06px",
                marginRight: "5px",
              }}
            >
              от
            </span>
            <div>
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "14.06px",
                  marginLeft: "12px",
                }}
              >
                50
              </span>
              <hr
                style={{
                  width: "34px",
                  height: "1.05px",
                  background: "rgba(153, 153, 153, 1)",
                  marginRight: "10px",
                  marginTop: "3px",
                  fontFamily: "Roboto, sans-serif",
                }}
              />
            </div>
            до{" "}
            <div>
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "14.06px",
                  marginLeft: "20px",
                  marginRight: "7px",
                }}
              >
                100
              </span>
              м²
              <hr
                style={{
                  width: "34px",
                  height: "1.05px",
                  background: "rgba(153, 153, 153, 1)",
                  marginLeft: "10px",
                  marginTop: "3px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Collapse bordered={false} expandIconPosition="end">
          <Panel header="Рядом" key="6">
            <Checkbox.Group
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  border: "2px solid rgba(204, 204, 204, 1)",
                  borderRadius: "5px",
                  paddingLeft: "2.8px",
                  paddingBottom: "1.2px",
                  boxSizing: "border-box",
                }}
              >
                <Checkbox className="custom-checkbox">Школа</Checkbox>
              </div>

              <div
                style={{
                  width: "24px",
                  height: "24px",
                  border: "2px solid rgba(204, 204, 204, 1)",
                  borderRadius: "5px",
                  marginTop: "25px",
                  marginBottom: "25px",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                <Checkbox
                  className="custom-checkbox"
                  style={{
                    position: "absolute",
                    top: "-4px",
                    left: "2.5px",
                  }}
                  disabled
                >
                  <p
                    style={{ width: "84px", height: "24px", marginTop: "5px" }}
                  >
                    Детский сад
                  </p>
                </Checkbox>
              </div>

              <div
                style={{
                  width: "24px",
                  height: "24px",
                  border: "2px solid rgba(204, 204, 204, 1)",
                  borderRadius: "5px",
                  paddingLeft: "2px",
                  paddingBottom: "2px",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                <Checkbox
                  className="custom-checkbox"
                  style={{
                    position: "absolute",
                    top: "-4px",
                    left: "2.5px",
                  }}
                >
                  <p
                    style={{ width: "124px", height: "24px", marginTop: "5px" }}
                  >
                    Станция метро
                  </p>
                </Checkbox>
              </div>

              <div
                style={{
                  width: "20px",
                  height: "20px",
                  border: "2px solid rgba(204, 204, 204, 1)",
                  borderRadius: "5px",
                  paddingLeft: "2px",
                  paddingBottom: "2px",
                  marginTop: "25px",
                  marginBottom: "25px",
                }}
              >
                <Checkbox className="custom-checkbox">Рынок</Checkbox>
              </div>
            </Checkbox.Group>
            <Radio.Group style={{ display: "flex", flexDirection: "column" }}>
              <Radio value="yes">Да</Radio>
              <Radio value="no">Нет</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3
          style={{
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: "16.41px",
            color: "rgba(22, 26, 29, 1)",
            marginBottom: "24px",
          }}
        >
          Комиссионные
        </h3>

        <Collapse
          bordered={false}
          expandIconPosition="end"
          style={{
            width: "148px",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "16.41px",
              color: "rgba(22, 26, 29, 1)",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            Да
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "2px solid rgba(204, 204, 204, 1)",
              borderRadius: "5px",
              paddingLeft: "2px",
              paddingRight: "2px",
              paddingBottom: "2px",
              marginTop: "25px",
              marginBottom: "25px",
              width: "20px",
            }}
          >
            <Checkbox
              className="custom-checkbox"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "16.41px",
                color: "rgba(22, 26, 29, 1)",
                marginTop: "2px",
              }}
            />
          </div>

          <span
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "16.41px",
              color: "rgba(22, 26, 29, 1)",
              marginLeft: "40px",
              marginRight: "20px",
            }}
          >
            Нет
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "2px solid rgba(204, 204, 204, 1)",
              borderRadius: "5px",
              paddingLeft: "2px",
              paddingRight: "2px",
              paddingBottom: "2px",
              marginTop: "25px",
              marginBottom: "25px",
              width: "20px",
            }}
          >
            <Checkbox
              className="custom-checkbox"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "16.41px",
                color: "rgba(22, 26, 29, 1)",
                marginTop: "2px",
              }}
            />
          </div>

          <Button
            type="primary"
            className="sidebar__apply-btn"
            style={{
              marginBottom: "15px",
              marginLeft: "60px",
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "16.06px",
              color: "rgba(22, 26, 29, 1)",
            }}
          >
            Применить
          </Button>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
