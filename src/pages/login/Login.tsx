import { TbPhone, TbUser, TbLock } from "react-icons/tb";
import { FiEye, FiEyeOff, FiCheck } from "react-icons/fi";
import { useState, useContext, FormEvent } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { AuthContext } from './../authcontext/authcontext';
import { useNavigate } from "react-router";
import { Form, Input, Button, Row, Col } from "antd";

interface LoginFormData {
  phoneNumber: string;
  name: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const submitHandler = (values: LoginFormData): void => {
    if (!phoneNumber || !name || !password || !confirmPassword) {
      toast.error("Maydonlar hammasi to'ldirilishi kerak!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Parol va tasdiqlash paroli bir-biriga mos emas");
      return;
    }

    fetch('https://fakestoreapi.com/auth/login', {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Login qilishda xatolik");
        }
        return res.json();
      })
      .then((json) => {
        toast.success("Tizimga muvaffaqiyatli kirildi!");
        login(json.token);
        navigate("/auth");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh", backgroundColor: "#FCA311" }}>
      <Col xs={24} sm={18} md={12} lg={8} xl={6}>
        <div className="login-form bg-white rounded-lg p-6 shadow-lg">
          <Form layout="vertical" onFinish={submitHandler}>
            <Form.Item label="Номер телефона" required>
              <Input
                prefix={<TbPhone />}
                placeholder="+998 99 880 80-80"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                addonAfter={<FiCheck className="text-green-500" />}
              />
            </Form.Item>

            <Form.Item label="Имя" required>
              <Input
                prefix={<TbUser />}
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Пароль" required>
              <Input.Password
                prefix={<TbLock />}
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                iconRender={(visible) =>
                  visible ? <FiEyeOff /> : <FiEye />
                }
                visibilityToggle
              />
            </Form.Item>

            <Form.Item label="Подтверждение пароля" required>
              <Input.Password
                prefix={<TbLock />}
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                iconRender={(visible) =>
                  visible ? <FiEyeOff /> : <FiEye />
                }
                visibilityToggle
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Далее
              </Button>
            </Form.Item>
            <Form.Item>
              <div className="text-center">
                Уже есть аккаунт?{" "}
                <a href="#" className="text-secondary font-semibold">
                  Войти
                </a>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
