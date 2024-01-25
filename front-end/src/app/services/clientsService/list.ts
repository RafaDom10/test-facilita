import { httpClient } from "../HttpClient"

export interface ListResponse {
  id: string
  name: string
  email: string
  phone: string
  coordinates: string
}

export async function list() {
  const { data } = await httpClient.get<ListResponse[]>('/clients')
  return data
}
