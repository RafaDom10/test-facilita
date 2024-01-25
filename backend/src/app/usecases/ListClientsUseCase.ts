import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../repositories/IClientRepository'
import { type Client } from '../model/Client'

@injectable()
export class ListClientsUseCase {
  constructor (
    @inject('ClientRepository') private readonly clientRepo: IClientRepository
  ) {}

  async execute (): Promise<Client[]> {
    const clients = await this.clientRepo.findAll()
    return clients
  }
}
