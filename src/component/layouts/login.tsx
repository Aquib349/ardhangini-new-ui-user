import { FcGoogle } from "react-icons/fc";
import { useSignIn } from "@clerk/clerk-react";
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
import { EmailCodeFactor, SignInFirstFactor } from "@clerk/types";

// Define the form schema using zod
const FormSchema = z.object({
  code: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

function Login() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [verifying, setVerifying] = useState(false);
  const [email, setEmail] = useState("");
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
    if (!isLoaded && !signIn) return null;

    try {
      // Start the sign-in process using the phone number method
      const { supportedFirstFactors } = await signIn.create({
        identifier: email,
      });

      // Filter the returned array to find the 'phone_code' entry
      const isEmailFactor = (
        factor: SignInFirstFactor
      ): factor is EmailCodeFactor => {
        return factor.strategy === "email_code";
      };
      const EmailCodeFactor = supportedFirstFactors?.find(isEmailFactor);

      if (EmailCodeFactor) {
        // Grab the emailAddressId
        const { emailAddressId } = EmailCodeFactor;

        // Send the OTP code to the user
        await signIn.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId,
        });

        // Set verifying to true to display second form
        // and capture the OTP
        setVerifying(true);
      }
    } catch (err) {
      // for more info on error handling
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  }

  // Handle the verification of sent otp
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!isLoaded && !signIn) return null;

    try {
      // Use the code provided by the user and attempt verification
      const { code } = data;
      const signInAttempt = await signIn.attemptFirstFactor({
        strategy: "email_code",
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });

        navigate("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(signInAttempt);
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  }
  return (
    <>
      <div className="login-component">
        <div className="main text-sm">
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
            <h2 className="text-xl font-semibold text-center">Login</h2>
            {!verifying ? (
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
                  onClick={handleSendEmailLink}
                >
                  Send OTP
                </button>
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
                  <span className="text-gray-600">Sign in with Google</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
