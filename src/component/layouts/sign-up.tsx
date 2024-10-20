import { useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { apiClient, handleApiError } from "../../services/axios/axios.service";
import { Input } from "../ui/input";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setLoading(true);
    setError("");

    // Validate password and confirm password match
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await apiClient.post("/user/register/email", {
        firstName,
        lastName,
        email,
        password,
        repeatPassword,
      });

      const { id } = response.data;
      localStorage.setItem("userId", id);
      navigate('/login');
    } catch (err) {
      setError("Signup failed. Please try again.");
      handleApiError(err);
      console.error("Signup failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-component">
      <div className="main text-sm h-full w-full flex justify-center items-center">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
          <h2 className="text-xl font-semibold text-center">Sign-Up</h2>
          <div className="mt-4">
            <Input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <Input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={repeatPassword}
            />
            <Button
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
              onClick={handleSignUp}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <p className="text-right mb-4 px-1 text-xs">
              Existing user?{" "}
              <Link to="/login" className="font-medium text-sm text-red-500">
                login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
