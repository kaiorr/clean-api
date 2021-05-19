import { Router } from 'express'
import { makeSingUpController } from './../factories/signup'
import { adapterRoute } from '../adapter/express-route-adapter'

export default (router: Router): void => {
  router.post('/signup', adapterRoute(makeSingUpController()))
}
