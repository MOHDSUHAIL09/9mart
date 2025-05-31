import { useState } from "react";
import SendOtpForm from "../pages/SendOtpForm";
import VerifyOtpForm from "./VerifyOtpForm";


export default function LoginWithOtp() {
  const [email, setEmail] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);

  function handleOtpRequested(email) {
    setEmail(email);
    setOtpRequested(true);
  }

  function handleLoginSuccess() {
    alert("Login successful!");
    // Navigate or update your app state here
  }

  return (
    <div>
      {!otpRequested ? (
        <SendOtpForm onOtpRequested={handleOtpRequested} />
      ) : (
        <VerifyOtpForm email={email} onSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}
