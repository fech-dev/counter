export const countDecimalDigits = (value) => {
  const [, decimals = ''] = String(value).split(/[.,]/)
  return decimals.length
}