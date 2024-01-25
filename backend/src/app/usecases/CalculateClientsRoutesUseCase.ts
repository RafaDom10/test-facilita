import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../repositories/IClientRepository'
import { type Client } from '../model/Client'

const heapsPermute = require('heaps-permute')

interface Coordinates {
  x: number
  y: number
  name?: string
}

@injectable()
export class CalculateClientsRoutesUseCase {
  constructor (
    @inject('ClientRepository') private readonly clientRepo: IClientRepository
  ) {}

  async execute (): Promise<any> {
    const clients = await this.getClients()

    if (!clients) {
      return []
    }

    const clientCoordinates: Coordinates[] = []

    for (const client of clients) {
      if (typeof client.coordinates === 'string') {
        const coordinates = client.coordinates.split(',')
        clientCoordinates.push({
          x: Number(coordinates[0]),
          y: Number(coordinates[1]),
          name: client.name
        })
      }
    }

    return this.calculateShortestRote(clientCoordinates)
  }

  private async getClients (): Promise<Client[]> {
    const clients = await this.clientRepo.findAll()
    return clients
  }

  private calculateDistanceCompanyClient (client: Coordinates): number {
    const distance = this.calculateDistance({ x: 0, y: 0 }, client)
    return distance
  }

  private calculateDistance (mark1: Coordinates, mark2: Coordinates): number {
    return Math.sqrt(Math.pow(mark2.x - mark1.x, 2) + Math.pow(mark2.y - mark1.y, 2))
  }

  private calculateTotalDistance (rote: number[], client: Coordinates[]): number {
    let totalDistance = 0
    for (let i = 0; i < rote.length - 1; i++) {
      totalDistance += this.calculateDistance(client[rote[i]], client[rote[i + 1]])
    }
    totalDistance += this.calculateDistance(client[rote[rote.length - 1]], { x: 0, y: 0 })
    return totalDistance
  }

  private calculateShortestRote (clients: Coordinates[]): Coordinates[] {
    const clientIndex = Array.from({ length: clients.length }, (_, index) => index)
    const allRoutes = heapsPermute(clientIndex)

    let shortestDistance = Infinity
    let bestRoute: any = []

    allRoutes.forEach((rota: number[]) => {
      const actualDistance = this.calculateTotalDistance(rota, clients)

      if (actualDistance < shortestDistance) {
        shortestDistance = actualDistance
        bestRoute = rota
      }
    })

    return bestRoute.map((index: any) => clients[index])
  }
}
