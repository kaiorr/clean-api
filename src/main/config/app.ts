import express from 'express'
import setupMiddlewwares from './middlewares'

const app = express()
setupMiddlewwares(app)
export default app
