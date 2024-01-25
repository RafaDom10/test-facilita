import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../repositories/IClientRepository'
import { type Client } from '../model/Client'

@injectable()
export class UpdateClientUseCase {
  constructor (
    @inject('ClientRepository') private readonly clientRepo: IClientRepository
  ) {}

  async execute (payload: Client, id: string): Promise<Client> {
    const client = await this.clientRepo.update(payload, id)
    return client
  }
}
