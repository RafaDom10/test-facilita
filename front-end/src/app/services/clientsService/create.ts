import { httpClient } from "../HttpClient"

export interface ListResponse {
  id: string
  name: string
  email: string
  phone: string
  coordinates: string
}

interface Payload {
  name: string
  email: string
  phone: string
  coordinates: string
}

export async function create(payload: Payload) {
  const { data } = await httpClient.post<ListResponse>('/clients', payload)
  return data
}
