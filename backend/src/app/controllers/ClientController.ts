import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { CreateClientUseCase } from '../usecases/CreateClientUseCase'
import { ListClientsUseCase } from '../usecases/ListClientsUseCase'
import { DeleteClientUseCase } from '../usecases/DeleteClientUseCase'
import { UpdateClientUseCase } from '../usecases/UpdateClientUseCase'
import { CalculateClientsRoutesUseCase } from '../usecases/CalculateClientsRoutesUseCase'

export class ClientController {
  async store (request: Request, response: Response): Promise<Response> {
    const { name, email, phone, coordinates } = request.body

    const usecase = container.resolve(CreateClientUseCase)
    const result = await usecase.execute({ name, email, phone, coordinates })

    if (result.isLeft()) {
      return response.status(result.value.statusCode).json(result.value.message)
    }

    return response.status(201).json(result)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, email, phone, coordinates } = request.body

    const usecase = container.resolve(UpdateClientUseCase)
    const result = await usecase.execute({ id, name, email, phone, coordinates }, id)

    if (result.isLeft()) {
      return response.status(result.value.statusCode).json(result.value.message)
    }

    return response.status(201).json(result)
  }

  async index (request: Request, response: Response): Promise<Response> {
    const usecase = container.resolve(ListClientsUseCase)
    const result = await usecase.execute()
    return response.status(200).json(result)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const usecase = container.resolve(DeleteClientUseCase)
    const result = await usecase.execute(String(id))

    if (result.isLeft()) {
      return response.status(result.value.statusCode).json(result.value.message)
    }

    return response.sendStatus(204)
  }

  async calculateClientRoute (request: Request, response: Response): Promise<Response> {
    const usecase = container.resolve(CalculateClientsRoutesUseCase)
    const result = await usecase.execute()
    return response.status(200).json(result)
  }
}
