export function removeDiacritics(str: string): string {
  const from = 'ÀÁÂÃÄÅàáâãäåÇçÐÈÉÊËèéêëÌÍÎÏìíîïÑñÒÓÔÕÖØòóôõöøÙÚÛÜùúûüŠšŸÝÿýŽž';
  const to = 'AAAAAAaaaaaaCcDEEEEeeeeIIIIiiiiNnOOOOOOooooooUUUUuuuuSsYYyyZz';
  for (let i = 0; i < from.length; i++)
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));

  return str;
}

export const slug = (str: string): string =>
  removeDiacritics(str)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-e-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
