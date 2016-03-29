// https://github.com/jquery/jquery/blob/0c1f72667dd74bf00c6c514ebe8b7e92c3e7ad0e/src/core.js
function isNumeric (obj) {
  const type = typeof (obj)
  return (type === 'number' || type === 'string') && !Number.isNaN(obj - parseFloat(obj))
}

export { isNumeric }
