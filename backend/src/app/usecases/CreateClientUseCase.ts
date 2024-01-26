import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../repositories/IClientRepository'
import { type Client } from '../model/Client'
import { left, type Either, right } from '../errors/either'
import { GenericError } from '../errors/generic.error'

type Response = Either<GenericError, Client>

@injectable()
export class CreateClientUseCase {
  constructor (
    @inject('ClientRepository') private readonly clientRepo: IClientRepository
  ) {}

  async execute (payload: Omit<Client, 'id'>): Promise<Response> {
    if (!payload.name) {
      return left(new GenericError('Name is required', 400))
    }

    if (!payload.email) {
      return left(new GenericError('Email is required', 400))
    }

    const emailExists = await this.clientRepo.findByEmail(payload.email)

    if (emailExists) {
      return left(new GenericError('This e-mail is already in use', 400))
    }

    const client = await this.clientRepo.create(payload)

    return right(client)
  }
}
