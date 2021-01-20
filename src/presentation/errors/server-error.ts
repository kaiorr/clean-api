export class ServerError extends Error {
  constructor (paramName: string) {
    super('Internal Server Error')
    this.name = 'ServerError'
  }
}
