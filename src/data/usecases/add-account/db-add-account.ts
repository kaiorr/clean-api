import { AddAccountRepository } from './../../protocols/add-account-repository'
import { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRespository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRespository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRespository = addAccountRespository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const account = await this.addAccountRespository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return account
  }
}
