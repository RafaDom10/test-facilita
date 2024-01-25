import { httpClient } from "../HttpClient"

export interface ListOrderedByShortestRouteResponse {
  name: string
  coordinates: {
    x: number,
    y: number
  }
}

export async function listOrderedByShortestRoute() {
  const { data } = await httpClient.get<ListOrderedByShortestRouteResponse[]>('/clients/routes')
  return data
}
