import { type Client } from '../model/Client'

export interface IClientRepository {
  findAll: () => Promise<Client[]>
  findById: (id: string) => Promise<Client>
  findByEmail: (email: string) => Promise<Client>
  create: ({ name, email, phone, coordinates }: Omit<Client, 'id'>) => Promise<Client>
  update: ({ name, email, phone, coordinates }: Client, id: string) => Promise<Client>
  delete: (id: string) => Promise<void>
}
