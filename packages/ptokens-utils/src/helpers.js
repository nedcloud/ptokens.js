/**
 * @param {String} _pToken
 */
const pTokenNameIsValid = _pToken => {
  if (_pToken.toLowerCase() === 'peos') return true
  if (_pToken.toLowerCase() === 'pbtc') return true
  if (_pToken.toLowerCase() === 'pltc') return true
  return false
}

export { pTokenNameIsValid }
