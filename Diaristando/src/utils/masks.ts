export const applyPhoneMask = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  return cleaned.replace(/^(\d{1})(\d{4})(\d{4})$/, '$1 $2 $3');
};

export const applyCepMask = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  return cleaned.replace(/^(\d{5})(\d{3})$/, '$1-$2');
};
