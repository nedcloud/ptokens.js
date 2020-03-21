import utils from '../src'
import { expect } from 'chai'

const eosPrivateKey = '5J9J3VWdCEQsShpsQScedL1debcBoecuSzfzUsvuJB14f77tiGv'
const eosProvider = 'https://ptoken-eos.provable.xyz:443'

jest.setTimeout(30000)

test('Should get the correct EOS account name', async () => {
  const eosjs = utils.eos.getApi(eosPrivateKey, eosProvider)
  const expectedAccountName = 'all3manfr4di'
  const publicKeys = await utils.eos.getAvailablePublicKeys(eosjs)
  const accountName = await utils.eos.getAccountName(eosjs, publicKeys)
  expect(accountName).to.be.equal(expectedAccountName)
})

test('Should get the list of public keys', async () => {
  const eosjs = utils.eos.getApi(eosPrivateKey, eosProvider)
  const publicKeys = await utils.eos.getAvailablePublicKeys(eosjs)
  expect(publicKeys).to.be.an('array')
})

test('Should be a valid EOS account name', () => {
  const validEosAccountName = 'all3manfr3di'
  const isValid = utils.eos.isValidAccountName(validEosAccountName)
  expect(isValid).to.be.equal(true)
})

test('Should not be a valid EOS account name', () => {
  const notValidEosAccountName = 'not valid eos account'
  const isValid = utils.eos.isValidAccountName(notValidEosAccountName)
  expect(isValid).to.be.equal(false)
})