import { type Client } from '../model/Client'

export interface IClientRepository {
  findAll: () => Promise<Client[]>
  create: ({ name, email, phone, coordinates }: Client) => Promise<Client>
  update: ({ name, email, phone, coordinates }: Client, id: string) => Promise<Client>
  delete: (id: string) => Promise<void>
}
