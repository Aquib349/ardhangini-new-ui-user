import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface loginProps {
  handleLogin: (email: string, password: string) => void;
}

function Login({ handleLogin }: loginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function to handleLogin
  function handleUserLogin() {
    handleLogin(email, password);
  }

  return (
    <>
      <div className="login-component">
        <div className="main text-sm">
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
            <h2 className="text-xl font-semibold text-center">Login</h2>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
                onClick={handleUserLogin}
              >
                Login
              </Button>
              <p className="text-right mb-4 px-1 text-xs">
                Not an existing user?{" "}
                <Link
                  to="/sign-up"
                  className="font-medium text-sm text-red-500"
                >
                  SignUp here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
