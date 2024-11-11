import { FC, useContext } from "react";
import { MdPersonOutline } from "react-icons/md";
import { PiNotepadBold } from "react-icons/pi";
import { FaRegHeart, FaIdCard } from "react-icons/fa";
import { LuRocket, LuWallet } from "react-icons/lu";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

import { AuthContext } from "../../pages/authcontext/authcontext";
import { useNavigate } from "react-router";
import { Layout, Menu, Button, Input, Typography, Badge } from "antd";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const { favoriteCount } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleExit = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width={250} style={{ background: "#fff", padding: "20px" }}>
        <Menu mode="vertical" style={{ borderRight: 0 }}>
          <Menu.Item icon={<MdPersonOutline size={26} />} key="1">
            Мой профиль
          </Menu.Item>
          <Menu.Item icon={<PiNotepadBold size={26} />} key="2">
            Мои объявления
          </Menu.Item>
          <Menu.Item icon={<FaRegHeart size={26} />} key="3">
            Избранное{" "}
            {favoriteCount > 0 && (
              <Badge count={favoriteCount} offset={[10, -10]} />
            )}
          </Menu.Item>
          <Menu.Item icon={<LuWallet size={26} />} key="4">
            Баланс: <Text strong>10,000 UZS</Text>
          </Menu.Item>
          <Menu.Item icon={<FaIdCard size={26} />} key="5">
            Ваш ID: <Text strong>1001</Text>
          </Menu.Item>
          <Menu.Item icon={<LuRocket size={26} />} key="6">
            Тарифы
          </Menu.Item>
          <Menu.Item icon={<BsEmojiSmile size={26} />} key="7">
            Отзывы
          </Menu.Item>
          <Menu.Item key="8">
            <Button
              onClick={handleExit}
              type="text"
              icon={<CiLogin size={26} />}
              danger
            >
              Выйти из аккаунта
            </Button>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: "20px" }}>
        <Content>
          <Title level={3}>Изменить профиль</Title>
          <form>
            <div style={{ marginBottom: "20px" }}>
              <Text>Имя</Text>
              <Input defaultValue="Александр" style={{ width: "100%", marginTop: "8px" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Text>Телефон</Text>
              <Input
                defaultValue="+998 99 895 90-95"
                disabled
                style={{ width: "100%", marginTop: "8px" }}
              />
            </div>
            <Button type="primary" style={{ width: "100%" }}>
              Сохранить
            </Button>
          </form>

          <div style={{ marginTop: "40px" }}>
            <Text strong>Текущий тариф:</Text> Optimal Plan 3
          </div>
          <div style={{ marginTop: "20px" }}>
            <Text strong>Разрешение на размещение объявлений:</Text>
            <div style={{ color: "#52c41a", marginTop: "4px" }}>
              Есть <TiTick size={20} />
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Text>Разрешение на просмотр дополнительной информации об объявлении:</Text>
            <div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
              <Text type="danger">Нет ✘</Text>
              <Button type="link">Подписаться на тарифный план</Button>
            </div>
          </div>
          <Button type="primary" style={{ width: "100%", marginTop: "20px" }}>
            Поднять объявление в топ
          </Button>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Profile;
