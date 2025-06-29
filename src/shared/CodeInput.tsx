import { TextInput } from './TextInput.tsx';
import React from 'react';

interface CodeInputProps {
  code: string;
  onCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const CodeInput: React.FC<CodeInputProps> = ({ code, onCodeChange, disabled }) => {
  return (
    <div className="space-y-6">
      <TextInput
        type="text"
        value={code}
        onChange={onCodeChange}
        placeholder="введите код из email"
        required
        disabled={disabled}
      />
    </div>
  );
}; 