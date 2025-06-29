import { useMemo, useState } from "react";
import { generateRandomPassword } from "../core/generate-random-password";
import { confirmSignUp, signUp } from "aws-amplify/auth";
import { Header } from "../shared/Header";
import { EmailInput } from "../shared/EmailInput";
import { CodeInput } from "../shared/CodeInput";
import { useNavigate } from "react-router";

type Step = 'SEND_CODE' | 'CONFIRM_CODE';

export const SignupPage = () => {
  const router = useNavigate()
  const [step, setStep] = useState<Step>("SEND_CODE")
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const randomPassword = useMemo(() => generateRandomPassword(12, true), [])

  const handleSendCode = async () => {
    const result = await signUp({
      username: email,
      password: randomPassword,
      options: {
        userAttributes: {
          email: email
        }
      }
    })

    console.log('Sign up result:', result);

    if(result.nextStep.signUpStep === "CONFIRM_SIGN_UP") {
      setStep("CONFIRM_CODE");
    }
  };

  const handleConfirm = async () => {
    const result = await confirmSignUp({
      username: email,
      confirmationCode: code
    });

    console.log('Confirm sign up result:', result);

    if (result.nextStep.signUpStep === "DONE") {
      console.log('Sign up successful');
      router('/login')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden flex items-center justify-center">

    <div className="relative z-10 w-full max-w-[600px] mx-auto px-6">
      <Header title="СОЗДАНИЕ АККАУНТА" description={step === "SEND_CODE" ? "ШАГ 1 ИЗ 2" : "ШАГ 2 ИЗ 2"} />

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