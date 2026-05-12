export const isRequired = (value) => Boolean(value && value.toString().trim() !== '')

export const isEmail = (value) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(value)
}

export const isPhoneNumber = (value) => {
  const pattern = /^[789]\d{9}$/
  return pattern.test(value)
}
