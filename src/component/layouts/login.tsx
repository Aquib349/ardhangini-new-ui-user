import { useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { apiClient, handleApiError } from "../../services/axios/axios.service";
import { useCart } from "../../hooks/use-cart";

interface LoginProps {
  setCookie: (name: string, value: any, options?: any) => void;
  setAccessToken: (accessToken: string) => void;
}

function Login({ setCookie, setAccessToken }: LoginProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { fetchCartData } = useCart();

  const handleLogin = async () => {
    try {
      const response = await apiClient.post("/user-auth/sign-in", {
        email,
        password,
      });
      const { accessToken, userId } = response.data;
      localStorage.setItem("userId", userId);
      setCookie("accessToken", accessToken, {
        path: "/",
        secure: true,
        sameSite: "strict",
      });
      setAccessToken(accessToken);

      navigate("/");
      fetchCartData();
    } catch (error) {
      handleApiError(error);
      console.error("Login failed:", error);
    }
  };

  // Prevent default form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-component">
      <div className="main text-sm h-screen">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
          <h2 className="text-xl font-semibold text-center">Login</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
            >
              Login
            </Button>
            <p className="text-right mb-4 px-1 text-xs">
              Not an existing user?{" "}
              <Link to="/sign-up" className="font-medium text-sm text-red-500">
                SignUp here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
