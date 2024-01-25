import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../repositories/IClientRepository'

@injectable()
export class DeleteClientUseCase {
  constructor (
    @inject('ClientRepository') private readonly clientRepo: IClientRepository
  ) {}

  async execute (id: string): Promise<void> {
    await this.clientRepo.delete(id)
  }
}
