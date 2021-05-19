import express from 'express'
import setupMiddlewwares from './middlewares'
import setupRoutes from '../config/routes'

const app = express()
setupMiddlewwares(app)
setupRoutes(app)
export default app
