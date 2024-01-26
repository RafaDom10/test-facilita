import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../repositories/IClientRepository'
import { type Client } from '../model/Client'
import { left, type Either, right } from '../errors/either'
import { GenericError } from '../errors/generic.error'

type Response = Either<GenericError, Client>

@injectable()
export class UpdateClientUseCase {
  constructor (
    @inject('ClientRepository') private readonly clientRepo: IClientRepository
  ) {}

  async execute (payload: Client, id: string): Promise<Response> {
    const client = await this.clientRepo.findById(id)

    if (!client) {
      return left(new GenericError('Client not found', 404))
    }

    if (!payload.name) {
      return left(new GenericError('Name is required', 400))
    }

    if (!payload.email) {
      return left(new GenericError('Email is required', 400))
    }

    const clientEmail = await this.clientRepo.findByEmail(payload.email)

    if (clientEmail && clientEmail.id !== id) {
      return left(new GenericError('This e-mail is already in use', 400))
    }

    const result = await this.clientRepo.update(payload, id)

    return right(result)
  }
}
