import { TextInput } from './TextInput.tsx';
import React from 'react';

interface EmailInputProps {
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const EmailInput: React.FC<EmailInputProps> = ({ email, onEmailChange, disabled }) => {
  return (
    <div className="space-y-6">
      <TextInput
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="введите email"
        required
        disabled={disabled}
      />
    </div>
  );
}; 