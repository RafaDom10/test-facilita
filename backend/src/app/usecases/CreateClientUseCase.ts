import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../repositories/IClientRepository'
import { type Client } from '../model/Client'

@injectable()
export class CreateClientUseCase {
  constructor (
    @inject('ClientRepository') private readonly clientRepo: IClientRepository
  ) {}

  async execute (payload: Client): Promise<Client> {
    const client = await this.clientRepo.create(payload)
    return client
  }
}
