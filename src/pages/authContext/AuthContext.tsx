import { createContext, useState, useEffect, FC, ReactNode } from "react";
import { Button, Badge, message } from "antd";

interface AuthContextProps {
  isLogin: boolean;
  login: (token: string) => void;
  logout: () => void;
  favoriteCount: number;
}

export const AuthContext = createContext<AuthContextProps>({
  isLogin: false,
  login: () => {},
  logout: () => {},
  favoriteCount: 0,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [favoriteCount, setFavoriteCount] = useState<number>(0);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    setFavoriteCount(favorites ? JSON.parse(favorites).length : 0);
  }, []);

  const login = (token: string) => {
    setIsLogin(true);
    localStorage.setItem("token", token);
    message.success("Successfully logged in!"); // Ant Design notification
  };

  const logout = () => {
    setIsLogin(false);
    localStorage.removeItem("token");
    message.info("You have been logged out."); // Ant Design notification
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout, favoriteCount }}>
      <div style={{ padding: "20px" }}>
        {isLogin ? (
          <Button type="primary" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button type="primary" onClick={() => login("sample_token")}>
            Login
          </Button>
        )}
        <Badge
          count={favoriteCount}
          style={{
            backgroundColor: "#52c41a",
            marginLeft: "15px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#1890ff" }}>Favorites</span>
        </Badge>
        {children}
      </div>
    </AuthContext.Provider>
  );
};
