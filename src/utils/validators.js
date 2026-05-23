export const isEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isPhoneNumber = (phone) => {
  const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  return regex.test(phone.replace(/\s/g, ''));
};

export const isUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isStrongPassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumbers &&
    hasSpecialChar
  );
};

export const getPasswordStrength = (password) => {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[!@#$%^&*]/.test(password)) strength++;

  if (strength <= 2) return 'weak';
  if (strength <= 4) return 'moderate';
  return 'strong';
};

export const isZipCode = (zip) => {
  const regex = /^\d{5}(-\d{4})?$/;
  return regex.test(zip);
};

export const isCreditCard = (cardNumber) => {
  const regex = /^(\d{4}[-\s]?){3}\d{4}$/;
  return regex.test(cardNumber);
};

export const validateMinLength = (str, min) => {
  return str.length >= min;
};

export const validateMaxLength = (str, max) => {
  return str.length <= max;
};

export const validateRange = (value, min, max) => {
  return value >= min && value <= max;
};

export const validateRequired = (value) => {
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return value !== null && value !== undefined;
};
