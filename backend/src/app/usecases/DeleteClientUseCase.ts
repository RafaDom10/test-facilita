import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../repositories/IClientRepository'
import { left, type Either, right } from '../errors/either'
import { GenericError } from '../errors/generic.error'

type Response = Either<GenericError, null>
@injectable()
export class DeleteClientUseCase {
  constructor (
    @inject('ClientRepository') private readonly clientRepo: IClientRepository
  ) {}

  async execute (id: string): Promise<Response> {
    const client = await this.clientRepo.findById(id)

    if (!client) {
      return left(new GenericError('Client not found', 404))
    }

    await this.clientRepo.delete(id)

    return right(null)
  }
}
