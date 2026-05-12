export const shortenText = (text, maxLength = 120) => {
  if (!text) return ''
  return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`
}

export const toTitleCase = (value) => {
  if (!value) return ''
  return value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}
