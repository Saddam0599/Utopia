import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router";
import { Button, Typography, Row, Col, Card } from "antd";

const { Text, Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleOtpChange = (otpValue: string) => {
    setOtp(otpValue);
    if (otpValue.length === 6) {
      navigate("/");
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh", backgroundColor: "#FCA311", paddingTop: "110px" }}>
      <Col>
        <Card
          style={{
            width: "100%",
            maxWidth: "478px",
            padding: "40px",
            position: "relative",
            borderRadius: "25px",
          }}
          bodyStyle={{ paddingTop: "110px", position: "relative" }}
        >
          <div style={{
            width: "100%", height: "91px", backgroundColor: "#FDB541",
            position: "absolute", top: 0, left: 0, borderRadius: "25px 25px 0 0"
          }} />
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
            <img src="./authImg.svg" alt="" />
          </div>
          <div
            onClick={() => navigate("/login")}
            style={{ display: "flex", alignItems: "center", cursor: "pointer", marginTop: "24px", marginBottom: "16px" }}
          >
            <BiArrowBack size={22} />
            <Text style={{ marginLeft: "8px", fontWeight: 500 }}>Вернуться</Text>
          </div>
          <div>
            <Title level={4} style={{ color: "#333", marginBottom: "7px" }}>Введите код из СМС</Title>
            <Text style={{ display: "block", color: "#666", marginBottom: "7px" }}>
              Не получили код? <span style={{ fontWeight: 600, color: "#FDB541" }}>Отправить повторно</span>
            </Text>
            <Text style={{ display: "block", color: "#666", marginBottom: "35px" }}>Получить повторный код можно через 1:48</Text>
            <OTPInput
              value={otp}
              onChange={handleOtpChange}
              numInputs={6}
              renderSeparator=""
              renderInput={(props) => (
                <input
                  {...props}
                  style={{
                    color: "#999",
                    border: "none",
                    borderBottom: "2px solid #999",
                    textAlign: "center",
                    fontSize: "48px",
                    fontWeight: "500",
                    width: "40px",
                    marginRight: "8px",
                  }}
                />
              )}
            />
          </div>
          <Button
            type="primary"
            style={{
              fontWeight: 500,
              marginTop: "32px",
              backgroundColor: "#FDB541",
              borderColor: "#FDB541",
              width: "100%",
              height: "40px",
              borderRadius: "5px",
            }}
            onClick={() => console.log("Registered")}
          >
            Зарегистрироваться
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;

