export const applyPhoneMask = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  const masked = cleaned.replace(/^(\d{1})(\d{4})(\d{4})$/, '$1 $2 $3');
  return masked;
};

export const applyCepMask = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  const masked = cleaned.replace(/^(\d{5})(\d{3})$/, '$1-$2');
  return masked;
};
