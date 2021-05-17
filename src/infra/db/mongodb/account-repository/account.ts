import { AccountModel } from '@/domain/models/account'
import { AddAccountModel } from '@/domain/usecases/add-account'
import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountColletion = MongoHelper.getCollection('accounts')
    const result = await accountColletion.insertOne(accountData)
    return MongoHelper.mapper(result.ops[0])
  }
}
