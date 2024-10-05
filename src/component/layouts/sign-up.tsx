import { FcGoogle } from "react-icons/fc";
import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

// Define the form schema using zod
const FormSchema = z.object({
  code: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [verifying, setVerifying] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      code: "",
    },
  });

  // Handle sending email OTP
  async function handleSendEmailLink() {
    if (!isLoaded && !signUp) return null;

    try {
      // Start the sign-up process using the email
      await signUp.create({
        emailAddress: email,
        password: password,
      });
      await signUp.prepareEmailAddressVerification();

      // set verifying to true to display the second form
      setVerifying(true);
    } catch (err) {
      console.error("Error sending OTP:", err);
    }
  }

  // Handle the verification of sent otp
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!isLoaded && !signUp) return null;

    try {
      // use the code and verify it.
      const { code } = data;
      const signInAttempt = await signUp.attemptEmailAddressVerification({
        code: code,
      });

      // if the verification was active, set the session to active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        console.log("otp verified");
        await setActive({ session: signInAttempt.createdSessionId });

        navigate("/");
      } else {
        console.error(signInAttempt);
      }
    } catch (err) {
      console.error("Error:", JSON.stringify(err));
    }
  }

  return (
    <div className="signup-component">
      <div className="main text-sm">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
          <h2 className="text-xl font-semibold text-center">Sign-Up</h2>
          {!verifying ? (
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
              <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
                onClick={handleSendEmailLink}
              >
                Send OTP
              </button>
              <p className="text-right mb-4 px-1 text-xs">
                Existing user?{" "}
                <Link to="/login" className="font-medium text-sm text-red-500">
                  login here
                </Link>
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 mt-4 text-center"
              >
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One-Time Password</FormLabel>
                      <div className="flex justify-center items-center">
                        <FormControl>
                          <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                      </div>
                      <FormDescription>
                        Please enter the one-time password sent to your email.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          )}

          {/* Divider */}
          {!verifying && (
            <div className="flex items-center justify-between mb-4">
              <hr className="w-full border-t border-gray-300" />
              <span className="mx-2 text-gray-500">OR</span>
              <hr className="w-full border-t border-gray-300" />
            </div>
          )}

          {/* Social Sign-ups */}
          {!verifying && (
            <div className="space-y-3">
              <button
                className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg py-2
               hover:bg-gray-100 font-medium"
              >
                <FcGoogle />
                <span className="text-gray-600">Sign up with Google</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
