import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Drawer, Menu, Button, Radio, Select, Input } from "antd";
import headerIcon from "../../assets/icons/header_icon.svg";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

// Define the items for the menu
const items: MenuItem[] = [
  {
    key: "1",
    label: "Категория недвижимости",
    children: [
      { key: "1-1", label: "Новостройки" },
      { key: "1-2", label: "Квартиры" },
      { key: "1-3", label: "Участки" },
      { key: "1-4", label: "Земля" },
      { key: "1-5", label: "Офисы" },
      { key: "1-6", label: "Магазины" },
    ],
  },
  {
    key: "2",
    label: "Область",
    children: [
      { key: "2-1", label: "Ташкентская область" },
      { key: "2-2", label: "Самаркандская область" },
      { key: "2-3", label: "Бухарская область" },
      { key: "2-4", label: "Хорезмская область" },
      { key: "2-5", label: "Ферганская область" },
      { key: "2-6", label: "Наманганская область" },
      { key: "2-7", label: "Андижанская область" },
      { key: "2-8", label: "Кашкадарьинская область" },
      { key: "2-9", label: "Сурхандарьинская область" },
      { key: "2-10", label: "Джизакская область" },
      { key: "2-11", label: "Навоийская область" },
      { key: "2-12", label: "Сырдарьинская область" },
    ],
  },
  {
    key: "3",
    label: "Ремонт",
    children: [
      { key: "3-1", label: "Евроремонт" },
      { key: "3-2", label: "Hi-Tech" },
      { key: "3-3", label: "Обычный ремонт" },
      { key: "3-4", label: "Советский ремонт" },
      { key: "3-5", label: "Категория ремонта" },
    ],
  },
];

const DrawerPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setIsOpen(!isOpen);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, height: "100%", zIndex: 50, backgroundColor: "#fff", overflowY: "auto" }}>
        <Button type="text" onClick={toggleDrawer} style={{ fontSize: "24px", color: "#1890ff", padding: "16px" }}>
          {isOpen ? <HiOutlineMenuAlt2 /> : <FiMenu />}
        </Button>
        <Link to="/">
          <img src={headerIcon} alt="logo" style={{ display: "block", margin: isOpen ? "32px 0 24px" : "0" }} />
        </Link>

        <Drawer
          title="Фильтр"
          placement="left"
          width={320}
          closable={false}
          onClose={toggleDrawer}
          visible={isOpen}
        >
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <Select defaultValue="Продажа" style={{ width: "100%" }}>
              <Select.Option value="Продажа">Продажа</Select.Option>
              <Select.Option value="Аренда">Аренда</Select.Option>
              <Select.Option value="Сожит.">Сожит.</Select.Option>
            </Select>
            <Select defaultValue="Аренда" style={{ width: "100%" }}>
              <Select.Option value="Аренда">Аренда</Select.Option>
              <Select.Option value="Продажа">Продажа</Select.Option>
              <Select.Option value="Сожит.">Сожит.</Select.Option>
            </Select>
            <Select defaultValue="Сожит." style={{ width: "100%" }}>
              <Select.Option value="Сожит.">Сожит.</Select.Option>
              <Select.Option value="Продажа">Продажа</Select.Option>
              <Select.Option value="Аренда">Аренда</Select.Option>
            </Select>
          </div>

          <Menu
            onClick={onClick}
            style={{ width: 320 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />

          <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label style={{ fontSize: "12px", fontWeight: 500 }}>Комнат</label>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#f3f3f3", padding: "8px 16px", borderRadius: "5px" }}>
              <span style={{ color: "#8c8c8c", fontWeight: 500 }}>от</span>
              <Input type="number" style={{ width: "40px", textAlign: "center" }} />
              <span style={{ color: "#8c8c8c", fontWeight: 500 }}>до</span>
              <Input type="number" style={{ width: "40px", textAlign: "center" }} />
            </div>
          </div>

          <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label style={{ fontSize: "12px", fontWeight: 500 }}>Площадь</label>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#f3f3f3", padding: "8px 8px", borderRadius: "5px" }}>
              <span style={{ color: "#8c8c8c", fontWeight: 500 }}>от</span>
              <Input type="number" style={{ width: "40px", textAlign: "center" }} />
              <span style={{ color: "#8c8c8c", fontWeight: 500 }}>до</span>
              <Input type="number" style={{ width: "40px", textAlign: "center" }} />
              <span style={{ color: "#8c8c8c", fontWeight: 500 }}>м²</span>
            </div>
          </div>

          <div style={{ marginTop: "16px" }}>
            <p style={{ fontWeight: 500, fontSize: "12px", color: "#1890ff", marginBottom: "24px" }}>Комиссионные</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Radio.Group defaultValue="Да">
                <Radio value="Да">Да</Radio>
                <Radio value="Нет">Нет</Radio>
              </Radio.Group>
              <Button type="primary" block onClick={toggleDrawer}>
                Применить
              </Button>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default DrawerPage;
