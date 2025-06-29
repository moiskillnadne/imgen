import { confirmSignIn, signIn } from "aws-amplify/auth";
import { useState } from "react";
import { Header } from "../shared/Header";
import { EmailInput } from "../shared/EmailInput";
import { CodeInput } from "../shared/CodeInput";
import { useNavigate } from "react-router";

type Step = 'SEND_CODE' | 'CONFIRM_CODE';

export const LoginPage = () => {
  const router = useNavigate()
  const [step, setStep] = useState<Step>("SEND_CODE")
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleSendCode = async () => {
    const result = await signIn({
      username: email,
      options: {
        authFlowType: 'USER_AUTH'
      }
    })

    console.log('Login in result:', result);

    if(result.nextStep.signInStep === "CONTINUE_SIGN_IN_WITH_FIRST_FACTOR_SELECTION") {
      const challengeResult = await confirmSignIn({
        challengeResponse: 'EMAIL_OTP'
      });
      
      console.log('Challenge response result:', challengeResult); 

      if(challengeResult.nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_EMAIL_CODE") {
        setStep("CONFIRM_CODE");
      }
    }

    if(result.nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_EMAIL_CODE") {
      setStep("CONFIRM_CODE");
    }
  };

  const handleConfirm = async () => {
    const result = await confirmSignIn({
      challengeResponse: code
    });

    console.log('Confirm login in result:', result);

    if (result.nextStep.signInStep === "DONE") {
      console.log('Login successful');
      router('/profile')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden flex items-center justify-center">
      
    <div className="relative z-10 w-full max-w-[600px] mx-auto px-6">
      <Header title="ВХОД" description={step === "SEND_CODE" ? "ШАГ 1 ИЗ 2" : "ШАГ 2 ИЗ 2"} />

      <div>
        {step === "SEND_CODE" && (
          <div className="space-y-6">
            <EmailInput email={email} onEmailChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleSendCode} className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl font-bold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed">Отправить код</button>
          </div>
        )}
        {step === "CONFIRM_CODE" && (
         <div className="space-y-6">
          <CodeInput code={code} onCodeChange={(e) => setCode(e.target.value)} />
          <button onClick={handleConfirm} className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl font-bold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed">Подтвердить код</button>
         </div>
        )}
      </div>
    </div>
  </div>
  )
}