import { container } from 'tsyringe'
import { type IClientRepository } from '../../app/repositories/IClientRepository'
import { ClientRepository } from '../../app/repositories/ClientRepository'

container.registerSingleton<IClientRepository>('ClientRepository', ClientRepository)
