/**
 * Generates a random password with specified requirements
 * @param length - Password length (minimum 8 characters)
 * @param includeSpecialChars - Whether to include special characters (!@#$%^&*()_+-=[]{}|;:,.<>?)
 * @returns A randomly generated password string
 */
export function generateRandomPassword(
  length: number = 12,
  includeSpecialChars: boolean = true
): string {
  if (length < 8) {
    throw new Error('Password length must be at least 8 characters');
  }

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  // Build character set
  let charset = lowercase + uppercase + numbers;
  if (includeSpecialChars) {
    charset += specialChars;
  }

  // Ensure password meets requirements by starting with required characters
  let password = '';
  password += getRandomChar(lowercase);  // At least one lowercase
  password += getRandomChar(uppercase);  // At least one uppercase
  password += getRandomChar(numbers);    // At least one number
  password += getRandomChar(specialChars); // At least one special character

  // Fill remaining length with random characters from full charset
  for (let i = 3; i < length; i++) {
    password += getRandomChar(charset);
  }

  // Shuffle the password to avoid predictable patterns
  return shuffleString(password);
}

/**
 * Gets a random character from a given character set
 */
function getRandomChar(charset: string): string {
  const randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
}

/**
 * Shuffles the characters in a string using Fisher-Yates algorithm
 */
function shuffleString(str: string): string {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

/**
 * Validates if a password meets the minimum requirements
 * @param password - Password to validate
 * @returns Object with validation results
 */
export function validatePassword(password: string): {
  isValid: boolean;
  hasMinLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
} {
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return {
    isValid: hasMinLength && hasUppercase && hasLowercase && hasNumber,
    hasMinLength,
    hasUppercase,
    hasLowercase,
    hasNumber,
  };
}